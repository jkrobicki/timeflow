<!-- update functionality not working yet! -->
<script lang="ts">
	import {
		DataTable,
		Toolbar,
		Button,
		Pagination,
		ToolbarBatchActions,
		ToolbarContent,
		ToolbarSearch
	} from '../carbon/components';
	import { Toggle, TextInput } from '../carbon/components';
	import Autocomplete from './autocomplete.svelte';

	export let headers: Array<Object> = [];
	export let rows: any = [{}];
	export let selectedRowIds: Array<number> = [];
	export let onRemove: Function = () => {};
	export let onUpdate: Function = () => {};
	export let upData: { id: number; name: string }[] = [];
	export let onCancel = function () {};
	export let columnsToEdit: Object = {};
	export let filteredRowIds: any = [];

	//@ts-ignore
	function updateData(event, event_row, event_cell, autocomplete: string = null) {
		let columnName: string = event_cell.cell.key;
		let cellValue = event_cell.cell.value;
		let rowId = event_row.row.id;
		let row = event_row.row;
		console.log('event', event);
		//@ts-ignore
		if (!(upData.filter((obj) => obj.id === rowId).length > 0)) {
			upData = [...upData, row];
		}
		let objIndex: any = upData.findIndex((obj) => obj.id === rowId);
		//@ts-ignore
		if (columnName === 'is_active') {
			upData[objIndex][columnName] = event.srcElement.checked;
		} else if (autocomplete === 'autocomplete') {
			upData[objIndex][columnName] = event[columnName];
		} else {
			upData[objIndex][columnName] = event.srcElement.value;
		}
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
		<ToolbarContent>
			<ToolbarSearch persistent shouldFilterRows bind:filteredRowIds />
		</ToolbarContent>
		<ToolbarBatchActions on:cancel={onCancel}>
			<Button on:click={onRemove}>Remove</Button>
			<Button on:click={onUpdate}>Update</Button>
		</ToolbarBatchActions>
	</Toolbar>

	<svelte:fragment slot="cell" let:cell let:row let:rowIndex let:cellIndex>
		{#if selectedRowIds.includes(row.id)}
			{#if cell.key in columnsToEdit}
				{#each Object.entries(columnsToEdit) as [columnName, value]}
					{#if cell.key === columnName}
						{#if value === 'input'}
							<input
								type="text"
								class="month-picker"
								value={cell.value}
								on:blur={(event) => updateData(event, { row }, { cell })}
							/>
						{:else if value === 'datetime'}
							<input
								type="datetime-local"
								class="month-picker"
								value={cell.value}
								on:blur={(event) => updateData(event, { row }, { cell })}
							/>
						{:else if value === 'toggle'}
							<Toggle
								hideLabel
								size="sm"
								labelA="Inactive"
								labelB="Active"
								toggled={cell.value}
								on:change={(event) => updateData(event, { row }, { cell })}
							/>
						{:else if value.type === 'autocomplete'}
							<Autocomplete
								options={value.options}
								selectDisplay={value.selectDisplay}
								placeholder={value.placeholder}
								text={cell.value}
								onChange={(event) => updateData(event, { row }, { cell }, 'autocomplete')}
							/>
						{/if}
					{/if}
				{/each}
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
	pageSizeInputDisabled
/>
