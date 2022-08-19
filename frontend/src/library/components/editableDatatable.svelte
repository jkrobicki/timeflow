<script lang="ts" context="module">
	export let upData3: Array<object>;
</script>

<!-- update functionality not working yet! -->
<script lang="ts">
	import {
		DataTable,
		Toolbar,
		Button,
		Pagination,
		ToolbarBatchActions
	} from '../carbon/components';

	export let headers: Array<Object> = [];
	export let rows: any;
	export let ColumnsToEdit: Array<string> = [];
	export let selectedRowIds: Array<number>;
	export let onRemove: Function;
	export let onUpdate: Function;
	export let upData2: Array<object>;
	//@ts-ignore
	function updateData(e, r, c) {
		let columnKey: any = c.cell.key;
		let value = c.cell.value;
		let id = r.row.id;
		let row = r.row;
		//@ts-ignore
		let i = rows.findIndex((e) => e.id == r.id);
		// console.log(e, e.srcElement.value);
		//@ts-ignore
		if (!(upData2.filter((obj) => obj.id === r.row.id).length > 0)) {
			upData2 = [...upData2, row];
		}
		let objIndex: number = upData2.findIndex((obj) => obj.id == id);
		//@ts-ignore
		upData2[objIndex][columnKey] = e.srcElement.value;
		console.log('upData2 inside component', upData2);
		upData3 = upData2;
		console.log('upData3 inside component', upData3);
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
				<input type="text" value={cell.value} on:blur={(e) => updateData(e, { row }, { cell })} />
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
