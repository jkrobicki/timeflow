<script lang="ts">
	import { DataTable } from '../library/carbon/components';
	let data = [
		{
			id: '1',
			message: 'A',
			action: '0',
			updated: false
		},
		{
			id: '2',
			message: 'B',
			action: '1',
			updated: false
		}
	];
	let hdrs = [
		{ key: 'id', value: 'ID' },
		{ key: 'message', value: 'Message' },
		{ key: 'action', value: 'Action' }
	];

	// @ts-ignore
	function updateData(e, r, c) {
		let i = data.findIndex((e) => e.id == r.row.id);
		console.log(e, e.srcElement.value);
		// @ts-ignore
		data[i][c.cell.key] = e.srcElement.value;
		data[i].updated = true;
	}
	newData.push(obj.id);

	function updateData(e, r, c) {
		let columnKey = c.cell.key;
		let value = c.cell.value;
		let id = r.row.id;
		data.forEach((obj) => {
			if (!(obj.id in newData)) {
				newData = 0;
				console.log('newData', newData);
			}
		});
	}
</script>

<DataTable selectable bind:rows={data} headers={hdrs}>
	<svelte:fragment slot="cell" let:cell let:row let:rowIndex let:cellIndex>
		(row index = {rowIndex}, cell index = {cellIndex} cell={cell.key})
		{#if cell.key === 'action'}
			<input value={row.action} on:blur={(e) => updateData(e, { row }, { cell })} />
		{:else if cell.key === 'message'}
			<input value={row.message} on:blur={(e) => updateData(e, { row }, { cell })} />
			{#if cell.value.length > 0}
				{cell.value}
			{:else}
				✏️
			{/if}
		{:else}
			{cell.value}
		{/if}
	</svelte:fragment>
</DataTable>
<pre>
{JSON.stringify(data, null, 2)}
</pre>
