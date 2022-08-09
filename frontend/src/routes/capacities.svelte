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
		Select
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
			<Select size="sm" />
		</Column>
		<Column>
			<Button class="button" size="small" kind="primary">Submit</Button>
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
