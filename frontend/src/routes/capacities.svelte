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
		NumberInput
	} from '../library/carbon/components';
	import { TrashCan } from '../library/carbon/icons';
	import { getUsers, getCapacities } from './data.js';
	import Autocomplete from '../library/components/autocomplete.svelte';

	let users: any[];
	let capacities = [{ id: '', last_name: '', first_name: '', year: '', month: '', days: '' }];
	let userId = '';
	let result: any = null;
	let selectedUser = { id: '' };
	let selectedRowIds: any = [];
	let selectedItemDisplay = '';
	let selectedItemValue = '';
	let numberInput = 0;
	let time = '';
	let emptyOpen = false;

	onMount(async () => {
		users = await getUsers(users);
	});
	onMount(async () => {
		capacities = await getCapacities(capacities);
	});

	async function onSubmit() {
		const res = await fetch('http://localhost:8002/api/capacities/', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				user_id: selectedUser.id,
				days: numberInput,
				month: time.slice(5, 8),
				year: time.slice(0, 4),
				created_at: Date.now(),
				updated_at: Date.now(),
				is_locked: false
			})
		});
		const json = await res.json();
		result = JSON.stringify(json);
		capacities = await getCapacities(capacities);
	}

	async function onRemove() {
		async function DeleteApi(id: number) {
			const response = await fetch('http://localhost:8002/api/capacities/?capacity_id=' + id, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({
					user_id: selectedUser.id,
					days: numberInput,
					month: time.slice(5, 8),
					year: time.slice(0, 4),
					created_at: Date.now(),
					updated_at: Date.now(),
					is_locked: false
				})
			});
			capacities = await getCapacities(capacities);
		}
		selectedRowIds.map(DeleteApi);
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
			<input class="month-picker" type="month" bind:value={time} />
		</Column>
		<Column>
			<NumberInput class="ccs-0" bind:value={numberInput} />
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
					{ key: 'full_name', value: 'USER' },
					{ key: 'year', value: 'YEAR' },
					{ key: 'month', value: 'MONTH' },
					{ key: 'days', value: 'CAPACITY DAYS' }
				]}
				pageSize={Pagination.pageSize}
				page={Pagination.page}
				rows={capacities}
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
				totalItems={capacities.length}
			/>
		</Column>
	</Row>
</Grid>

<style>
	:global(section.bx--table-toolbar) {
		position: relative;
		display: flex;
		width: 100%;
		min-height: 3rem;
		background-color: #ffff;
	}

	:global(div.bx--batch-actions--active) {
		overflow: auto hidden;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		pointer-events: all;
		transform: translate3d(0, 0, 0);
		background-color: #9684e5;
	}

	:global(div.bx--batch-summary) {
		position: sticky;
		z-index: 100000;
		left: 0;
		display: flex;
		min-height: 3rem;
		align-items: center;
		padding: 0 1rem;
		background-color: #9684e5;
		color: #fff;
	}

	:global(button.bx--batch-summary) {
		position: sticky;
		z-index: 100000;
		left: 0;
		display: flex;
		min-height: 3rem;
		align-items: center;
		padding: 0 1rem;
		background-color: #9684e5;
		color: #fff;
	}

	:global(button.bx--btn--primary:hover) {
		background-color: #9684e5;
	}

	:global(div.bx--batch-actions) {
		background-color: #9684e5;
	}

	:global(button.bx--btn--primary) {
		border-width: 1px;
		border-style: solid;
		border-color: rgba(0, 0, 0, 0);
		background-color: #9684e5;
		color: #fff;
	}

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

	.month-picker {
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
</style>
