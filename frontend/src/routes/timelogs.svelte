<script>
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
	} from '../lib/carbon/components';
	import { DateInput } from 'date-picker-svelte';
	import { TrashCan } from '../lib/carbon/icons';
	import AutoComplete from 'simple-svelte-autocomplete';
	import { getTimelogs } from './data.js';
	/**
	 * @type {any[]}
	 */
	let users = [];
	/**
	 * @type {any[]}
	 */
	let epics = [];
	/**
	 * @type {any[]}
	 */
	let epicAreas = [];
	/**
	 * @type {any[]}
	 */
	let timelogs = [];

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
	/**
	 * @type {any}
	 */
	let selectedEpic;
	/**
	 * @type {any}
	 */
	let selectedEpicArea;
	let startTime = new Date();
	let endTime = new Date();
	let countHours = '';
	let countDays = '';
	let result = null;
	/**
	 * @type {any}
	 */
	let selectedUser;

	/**
	 * @type {any[]}
	 */
	let selectedRowIds = [];

	getTimelogs(timelogs);

	onMount(async () => {
		const response = await fetch('http://localhost:8002/api/users', {
			method: 'GET',
			headers: { 'Content-type': 'application/json' }
		});
		users = await response.json();
	});

	onMount(async () => {
		const response = await fetch('http://localhost:8002/api/epics', {
			method: 'GET',
			headers: { 'Content-type': 'application/json' }
		});
		epics = await response.json();
	});

	onMount(async () => {
		const response = await fetch('http://localhost:8002/api/epic_areas', {
			method: 'GET',
			headers: { 'Content-type': 'application/json' }
		});
		epicAreas = await response.json();
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
		/**
		 * @param {any} id
		 */
		async function DeleteApi(id) {
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
</script>

<Grid>
	<Row>
		<Column>
			<AutoComplete
				className="auto_complete"
				inputClassName="inp_autocomplete"
				items={users}
				labelFieldName="username"
				valueFieldName="id"
				bind:selectedItem={selectedUser}
			/>
		</Column>
		<Column>
			<AutoComplete
				className="auto_complete"
				inputClassName="inp_autocomplete"
				items={epics}
				labelFieldName="epic_name"
				valueFieldName="id"
				bind:selectedItem={selectedEpic}
			/>
		</Column>
		<Column>
			<AutoComplete
				className="auto_complete"
				inputClassName="inp_autocomplete"
				items={epicAreas}
				labelFieldName="epic_area_name"
				valueFieldName="id"
				bind:selectedItem={selectedEpicArea}
			/>
		</Column>

		<Column>
			<DateInput format="yyyy-MM-dd HH:mm" bind:value={startTime} />
		</Column>
		<Column>
			<DateInput format="yyyy-MM-dd HH:mm" bind:value={endTime} />
		</Column>
		<Column>
			<Button class="button" on:click={onSubmit} size="small" kind="primary">Submit</Button>
		</Column>
	</Row>
	<Row />
	<br />
	<Row />
	<Row>
		<Column>
			<DataTable
				sortable
				batchSelection
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
					</ToolbarBatchActions>
				</Toolbar>
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
	:global(.button) {
		background-color: #9684e5;
	}

	:global(.auto_complete) {
		height: 2.5rem;
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
</style>
