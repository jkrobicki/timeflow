<script lang="ts">
	import 'carbon-components-svelte/css/white.css';
	import { onMount } from 'svelte';
	import {
		DataTable,
		Grid,
		Column,
		Row,
		Button,
		Pagination,
		Toolbar,
		ToolbarBatchActions
	} from '../library/carbon/components';
	import { DateInput } from 'date-picker-svelte';
	import { TrashCan } from '../library/carbon/icons';
	import { getTimelogs, getUsers, getEpics, getEpicAreas } from './data.js';
	import Autocomplete from '../library/components/autocomplete.svelte';
	import { SelectItem } from 'carbon-components-svelte';
	import { CellTower } from 'carbon-icons-svelte';
	import Index from './index.svelte';

	let users: any[];
	let epics: any[];
	let epicAreas: any;
	let timelogs: any = [];

	let timelog = {
		username: '',
		epicName: '',
		epicAreaName: '',
		startTime: new Date(),
		endTime: new Date()
	};
	let userId = '';
	let epicId = '';
	let epicAreaId = '';
	let selectedEpic = { epic_id: '', epic_name: '' };
	let selectedEpicArea = { id: '', epic_area_name: '' };
	let startTime = new Date();
	let endTime = new Date();
	let countHours = '';
	let countDays = '';
	let result: any = null;
	let selectedUser = { id: '', username: '' };
	let selectedRowIds: any = [];
	let selectedItemDisplay = '';
	let selectedItemValue = '';

	let upData: Array<object> = [];
	let editColumnsNames: Array<string> = ['start_time', 'end_time'];
	let updateRes: any;

	onMount(async () => {
		users = await getUsers(users);
	});
	onMount(async () => {
		epicAreas = await getEpicAreas(epicAreas);
	});
	onMount(async () => {
		epics = await getEpics(epics);
	});
	onMount(async () => {
		timelogs = await getTimelogs(timelogs);
	});

	async function onSubmit() {
		const res = await fetch('http://localhost:8002/api/timelogs/', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				user_id: selectedUser.id,
				start_time: startTime,
				end_time: endTime,
				epic_id: selectedEpic.epic_id,
				epic_area_id: selectedEpicArea.id,
				count_hours: 1,
				count_days: 2,
				month: startTime.getMonth(),
				year: startTime.getFullYear(),
				created_at: Date.now(),
				updated_at: Date.now(),
				is_locked: false
			})
		});
		const json = await res.json();
		result = JSON.stringify(json);
		timelogs = await getTimelogs(timelogs);
	}

	async function onRemove() {
		console.log('array is:', selectedRowIds);
		async function DeleteApi(id: number) {
			const response = await fetch('http://localhost:8002/api/timelogs/' + id, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({ timelog })
			});
			timelogs = await getTimelogs(timelogs);
		}
		selectedRowIds.map(DeleteApi);
	}

	async function handleSelect(selectedItem: any) {
		selectedUser = selectedItem;
	}

	async function handleSelectEpic(selectedItem: any) {
		selectedEpic = selectedItem;
		epicAreas = epicAreasByEpic(selectedEpic);
	}
	async function handleSelectEpicArea(selectedItem: any) {
		selectedEpicArea = selectedItem;
		console.log('selected epic area name is', selectedEpicArea.epic_area_name);
		return selectedEpicArea;
	}
	async function epicAreasByEpic(selectedEpic: any) {
		console.log('epic id is', selectedEpic.epic_id);
		const response = await fetch(
			'http://localhost:8002/api/epic_areas/?epic_id=' + selectedEpic.epic_id,
			{
				method: 'GET',
				headers: { 'Content-type': 'application/json' }
			}
		);
		epicAreas = await response.json();
		return epicAreas;
	}
	//@ts-ignore
	function updateData(e, r, c) {
		let columnKey: any = c.cell.key;
		let value = c.cell.value;
		let id = r.row.id;
		let row = r.row;
		let i = timelogs.findIndex((e) => e.id == r.id);
		// console.log(e, e.srcElement.value);
		if (!(upData.filter((obj) => obj.id === r.row.id).length > 0)) {
			upData = [...upData, row];
		}
		let objIndex: number = upData.findIndex((obj) => obj.id == id);
		upData[objIndex][columnKey] = e.srcElement.value;
	}
	async function onUpdate() {
		const updateRes = await fetch('http://localhost:8002/api/timelogs/update', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(upData)
		});
		timelogs = await getTimelogs(timelogs);
		upData = [];
		selectedRowIds = [];
		console.log('update res', updateRes);
	}
</script>

<Grid>
	<Row>
		<Column>
			<Autocomplete
				onChange={handleSelect}
				options={users}
				selectDisplay="username"
				placeholder="search user"
			/>
		</Column>
		<Column>
			<Autocomplete
				onChange={handleSelectEpic}
				options={epics}
				selectDisplay="epic_name"
				placeholder="search epic"
			/>
		</Column>
		<Column>
			{#key selectedEpic.epic_id}
				<Autocomplete
					onChange={handleSelectEpicArea}
					options={epicAreas}
					selectDisplay="epic_area_name"
					placeholder="search epic area"
				/>
			{/key}
		</Column>

		<Column>
			<DateInput format="yyyy-MM-dd HH:mm" bind:value={startTime} />
		</Column>
		<Column>
			<DateInput format="yyyy-MM-dd HH:mm" bind:value={endTime} />
		</Column>
		<Column>
			<input type="datetime-local" class="datetime-input" />
		</Column>
		<Column>
			<Button class="button-timelogs" on:click={onSubmit} size="small" kind="primary">Submit</Button
			>
		</Column>
	</Row>
	<Row />
	<br />
	<Row />
	<Row>
		<Column
			><p>
				You selected user <b>{selectedUser.username}</b> and Epic <b>{selectedEpic.epic_name}</b>
				and Epic Area <b>{selectedEpicArea.epic_area_name}</b>
				and updateRes: {updateRes}
			</p></Column
		>
		<Column>
			<pre>
				<!-- upData is
				{JSON.stringify(upData, null, 2)} -->
			</pre></Column
		>
	</Row>
	<Row>
		<Column>
			<DataTable
				sortable
				selectable
				bind:selectedRowIds
				headers={[
					{ key: 'id', value: 'ID' },
					{ key: 'username', value: 'USERAME' },
					{ key: 'epic_name', value: 'EPIC NAME' },
					{ key: 'epic_area_name', value: 'EPIC AREA NAME' },
					{ key: 'start_time', value: 'START TIME' },
					{ key: 'end_time', value: 'END TIME' },
					{ key: 'count_hours', value: 'COUNT HOURS' },
					{ key: 'count_days', value: 'COUNT DAYS' }
				]}
				pageSize={Pagination.pageSize}
				page={Pagination.page}
				rows={timelogs}
			>
				<Toolbar>
					<ToolbarBatchActions>
						<Button icon={TrashCan} on:click={onRemove}>Remove</Button>
						<Button on:click={onUpdate}>Update</Button>
					</ToolbarBatchActions>
				</Toolbar>

				<svelte:fragment slot="cell" let:cell let:row let:rowIndex let:cellIndex>
					{#if selectedRowIds.includes(row.id)}
						{#if editColumnsNames.includes(cell.key)}
							<input
								type="text"
								value={cell.value}
								on:blur={(e) => updateData(e, { row }, { cell })}
							/>
						{:else}
							{cell.value}
						{/if}
					{:else}
						{cell.value}
					{/if}
				</svelte:fragment>
			</DataTable>

			<Pagination
				bind:pageSize={Pagination.pageSize}
				bind:page={Pagination.page}
				totalItems={timelogs.length}
			/>
		</Column>
	</Row>
</Grid>

<style>
	:global(.button-timelogs) {
		background-color: #9684e5;
	}

	:global(.auto_complete) {
		height: 2.5rem;
	}
	.datetime-input {
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 1.28572;
		letter-spacing: 0.16px;
		outline: 2px solid rgba(0, 0, 0, 0);
		outline-offset: -2px;
		display: block;
		width: 100%;
		cursor: pointer;
		height: 2.5rem;
		padding: 0 1rem 0 0.5rem;
		border: none;
		border-bottom: 1px solid #8d8d8d;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: #f4f4f4;
		border-radius: 0;
		color: #161616;
		font-family: inherit;
		opacity: 1;
		transition: outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
	}
	:global(.autocomplete-input) {
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 1.28572;
		letter-spacing: 0.16px;
		outline: 2px solid rgba(0, 0, 0, 0);
		outline-offset: -2px;
		display: block;
		width: 100%;
		cursor: pointer;
		height: 2.5rem;
		padding: 0 3rem 0 1rem;
		border: none;
		border-bottom: 1px solid #8d8d8d;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: #f4f4f4;
		border-radius: 0;
		color: #161616;
		font-family: inherit;
		opacity: 1;
		transition: outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
	}

	b {
		font-weight: bold;
	}
	input[type='text'] {
		background-color: #f1f1f1;
		width: 100%;
	}
</style>
