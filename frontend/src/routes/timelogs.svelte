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
	import { TrashCan } from '../library/carbon/icons';
	import { getTimelogs, getUsers, getEpics, getEpicAreas } from './data.js';
	import Autocomplete from '../library/components/autocomplete.svelte';
	import EditableDatatable from '../library/components/editableDatatable.svelte';

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
	let startTimeRaw: string;
	let endTimeRaw: string;
	let result: any = null;
	let selectedUser = { id: '', username: '' };
	let selectedRowIds: any = [];
	let upData: Array<object> = [];
	let editColumnsNames: Array<string> = ['start_time', 'end_time'];
	let updateRes: any;
	let ColumnsToEdit = ['start_time'];

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
		let startTime = new Date(startTimeRaw);
		let endTime = new Date(endTimeRaw);

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
				}
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
			<input class="month-picker" type="datetime-local" bind:value={startTimeRaw} />
		</Column>
		<Column>
			<input class="month-picker" type="datetime-local" bind:value={endTimeRaw} />
		</Column>
		<Column>
			<Button on:click={onSubmit} size="small" kind="primary">Submit</Button>
		</Column>
	</Row>
	<Row>
		<Column>
			<EditableDatatable
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
				rows={timelogs}
				{ColumnsToEdit}
				bind:selectedRowIds
				{onRemove}
				{onUpdate}
				bind:upData
			/>
		</Column>
	</Row>
</Grid>
