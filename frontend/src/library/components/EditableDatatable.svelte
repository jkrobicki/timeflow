<!-- update functionality not working yet! -->
<script lang="ts">
	import {
		DataTable,
		Toolbar,
		Button,
		Pagination,
		ToolbarBatchActions
	} from '../carbon/components';
	import DateTimePicker from '../components/DateTimePicker.svelte';

	export let headers: Array<Object> = [];
	export let rows: any;
	export let ColumnsToEdit: Array<string> = [];
	export let selectedRowIds: Array<number>;
	export let onRemove: Function;
	export let onUpdate: Function;
	export let upData: Array<object> = [];

	//@ts-ignore
	function updateData(e, r, c) {
		let columnKey: any = c.cell.key;
		let value = c.cell.value;
		let id = r.row.id;
		let row = r.row;
		//@ts-ignore
		let i = rows.findIndex((e) => e.id == r.id);
		//@ts-ignore
		if (!(upData.filter((obj) => obj.id === r.row.id).length > 0)) {
			upData = [...upData, row];
		}
		let objIndex: number = upData.findIndex((obj) => obj.id == id);
		//@ts-ignore
		upData[objIndex][columnKey] = e.srcElement.value;
		console.log('upData inside component', upData);
	}
</script>

<DataTable
	sortable
	selectable
	bind:selectedRowIds
	{headers}
	pageSize={Pagination.pageSize}
	page={Pagination.page}
	{rows}
>
	<Toolbar>
		<ToolbarBatchActions>
			<Button on:click={onRemove}>Remove</Button>
			<Button on:click={onUpdate}>Update</Button>
		</ToolbarBatchActions>
	</Toolbar>

	<svelte:fragment slot="cell" let:cell let:row let:rowIndex let:cellIndex>
		{#if selectedRowIds.includes(row.id)}
			{#if ColumnsToEdit.includes(cell.key)}
				{#if cell.key === 'start_time'}
					<input
						type="datetime-local"
						class="month-picker"
						value={cell.value}
						on:blur={(e) => updateData(e, { row }, { cell })}
					/>
				{:else if cell.key === 'end_time'}
					<input
						type="datetime-local"
						class="month-picker"
						value={cell.value}
						on:blur={(e) => updateData(e, { row }, { cell })}
					/>
				{:else}
					<input type="text" on:blur={(e) => updateData(e, { row }, { cell })} />
				{/if}
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
	totalItems={rows.length}
/>
