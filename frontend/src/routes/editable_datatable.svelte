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

	// @ts-ignore
	function selection(e, r, c) {
		let i = data.findIndex((e) => e.id == r.id);
		// @ts-ignore
		data[i][c.key] = e.detail.selectedId;
	}
</script>

<DataTable bind:rows={data} headers={hdrs}>
	<svelte:fragment slot="cell" let:cell let:row>
		{#if cell.key === 'action'}
			<input value={row.message} on:blur={(e) => updateData(e, { row }, { cell })} />
		{:else if cell.key === 'message'}
			<div
				spellcheck="false"
				contenteditable="true"
				on:blur={(e) => updateData(e, { row }, { cell })}
			>
				{#if cell.value.length > 0}
					{cell.value}
				{:else}
					✏️
				{/if}
			</div>
		{:else}
			{cell.value}
		{/if}
	</svelte:fragment>
</DataTable>
<pre>
{JSON.stringify(data, null, 2)}
</pre>
