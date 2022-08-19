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
	let selectedEpic = { epic_id: '', epic_name: '' };
	let selectedEpicArea = { id: '', epic_area_name: '' };
	let startTime = new Date();
	let endTime = new Date();
	let result: any = null;
	let selectedUser = { id: '', username: '' };
	let selectedRowIds: any = [];

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
		return selectedEpicArea;
	}
	async function epicAreasByEpic(selectedEpic: any) {
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
		//@ts-ignore
		let i = timelogs.findIndex((e) => e.id == r.id);
		//@ts-ignore
		if (!(upData.filter((obj) => obj.id === r.row.id).length > 0)) {
			upData = [...upData, row];
		}
		let objIndex: number = upData.findIndex((obj) => obj.id == id);
		//@ts-ignore
		upData[objIndex][columnKey] = e.srcElement.value;
	}
	async function onUpdate() {
		const updateRes = await fetch('http://localhost:8002/api/timelogs/bulk_update', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(upData)
		});
		timelogs = await getTimelogs(timelogs);
		upData = [];
		selectedRowIds = [];
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
			<DateInput bind:value={startTime} />
		</Column>
		<Column>
			<DateInput bind:value={endTime} />
		</Column>
		<Column>
			<Button on:click={onSubmit} size="small" kind="primary">Submit</Button>
		</Column>
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
