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
		ToolbarBatchActions,
		Select,
		NumberInput
	} from '../library/carbon/components';
	import { DateInput } from 'date-picker-svelte';
	import { TrashCan } from '../library/carbon/icons';
	import { getUsers, getCapacities } from './data.js';
	import Autocomplete from '../library/components/autocomplete.svelte';

	let users: any[];
	let capacities = [{ id: '', last_name: '', first_name: '', year: '', month: '', days: '' }];
	let userId = '';
	let epicId = '';
	let epicAreaId = '';
	let selectedEpic = { epic_id: '', epic_name: '' };
	let selectedEpicArea: { id: ''; epic_area_name: '' };
	let startTime = new Date();
	let endTime = new Date();
	let countHours = '';
	let countDays = '';
	let result: any = null;
	let selectedUser = { id: '', username: '' };
	let selectedRowIds: any = [];
	let selectedItemDisplay = '';
	let selectedItemValue = '';
	let fullName: any = [];
	let capacityDaysArr = [...Array(29).keys()];

	onMount(async () => {
		users = await getUsers(users);
	});
	onMount(async () => {
		capacities = await getCapacities(capacities);
		fullName = capacities.map((obj) => {
			let newObj = {
				id: obj.id,
				year: obj.year,
				month: obj.month,
				days: obj.days,
				fullName: obj.first_name + ' ' + obj.last_name
			};
			return newObj;
		});
		capacities = fullName;
	});

	async function onSubmit() {
		const res = await fetch('http://localhost:8002/api/capacities/', {
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
		capacities = await getCapacities(capacities);
	}

	async function handleSelect(selectedItem: any) {
		selectedUser = selectedItem;
	}
</script>

<Grid>
	<Row>
		<Column>
			<Autocomplete
				onChange={handleSelect}
				options={users}
				selectDisplay="username"
				placeholder="select user"
			/>
		</Column>
		<Column>
			<DateInput format="yyyy-MM" bind:value={startTime} />
		</Column>
		<Column>
			<NumberInput value={1} />
		</Column>
		<Column>
			<Button class="button" size="small" kind="primary" on:click={onSubmit}>Submit</Button>
		</Column>
	</Row>
	<Row>
		<Column>
			<DataTable
				sortable
				batchSelection
				bind:selectedRowIds
				headers={[
					{ key: 'id', value: 'capacity ID' },
					{ key: 'fullName', value: 'USER' },
					{ key: 'year', value: 'YEAR' },
					{ key: 'month', value: 'MONTH' },
					{ key: 'days', value: 'CAPACITY DAYS' }
				]}
				pageSize={Pagination.pageSize}
				page={Pagination.page}
				rows={fullName}
			>
				<Toolbar>
					<ToolbarBatchActions>
						<Button icon={TrashCan}>Remove</Button>
					</ToolbarBatchActions>
				</Toolbar>
			</DataTable>
			<Pagination
				bind:pageSize={Pagination.pageSize}
				bind:page={Pagination.page}
				totalItems={capacities.length}
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

	:global(input.s-PqcUnfQoZ78k) {
		position: relative;
		height: 2.5rem;
		width: 100%;
		border: 0;
		border-bottom: solid 1px;
		background-color: #f1f1f1;
		padding-left: 0.5rem;
		display: block;
		font-size: 16px;
		padding-bottom: 0px;
	}

	:global(.button) {
		background-color: #9684e5;
		height: 2.5rem;
		font-size: 16px;
		display: block;
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
</style>
