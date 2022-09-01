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
	import { Toggle } from '../carbon/components';
	import Autocomplete from './autocomplete.svelte';

	export let headers: Array<Object> = [];
	export let rows: any = [{}];
	export let selectedRowIds: Array<number> = [];
	export let onRemove: Function = () => {};
	export let onUpdate: Function = () => {};
	export let upData: { id: number; name: string }[] = [];
	// export let autocompleteOptions: Array<object> = [];
	export let onCancel = function () {};
	export let columnsToEdit: Object = {};
	export let filteredRowIds: any = [];

	//@ts-ignore
	function updateData(e, r, c) {
		let columnKey: string = c.cell.key;
		let value = c.cell.value;
		let id = r.row.id;
		let row = r.row;
		console.log(e);

		//@ts-ignore
		if (!(upData.filter((obj) => obj.id === r.row.id).length > 0)) {
			upData = [...upData, row];
		}
		let objIndex: any = upData.findIndex((obj) => obj.id === id);
		//@ts-ignore
		console.log(e);
		if (columnKey === 'is_active') {
			upData[objIndex][columnKey] = e.srcElement.checked;
		} else {
			upData[objIndex][columnKey] = e.srcElement.value;
		}
	}
	function updateClient(selectedClient: any) {
		console.log('selected client', selectedClient);
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
				{#each Object.entries(columnsToEdit) as [title, paragraph]}
					{#if cell.key === title}
						{#if paragraph === 'input'}
							<input
								type="text"
								value={cell.value}
								on:blur={(e) => updateData(e, { row }, { cell })}
							/>
						{:else if paragraph === 'datetime'}
							<input
								type="datetime-local"
								class="month-picker"
								value={cell.value}
								on:blur={(e) => updateData(e, { row }, { cell })}
							/>
						{:else if paragraph === 'toggle'}
							<Toggle
								hideLabel
								size="sm"
								labelA="Inactive"
								labelB="Active"
								toggled={cell.value}
								on:change={(e) => updateData(e, { row }, { cell })}
							/>
						{:else if paragraph.input === 'autocomplete'}
							<Autocomplete
								options={paragraph.options}
								selectDisplay={paragraph.selectDisplay}
								placeholder={paragraph.placeholder}
								onFocus={(event) => updateData(event, { row }, { cell })}
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
