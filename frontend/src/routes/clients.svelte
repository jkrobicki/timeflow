<script lang="ts">
	import { getClients } from './data.js';
	import { onMount } from 'svelte';
	import EditableDatatable from '../library/components/EditableDatatable.svelte';
	import {
		Grid,
		Column,
		Row,
		DataTable,
		Button,
		Pagination,
		Toolbar,
		ToolbarBatchActions,
		TextInput,
		Toggle
	} from '../library/carbon/components';

	let newClientsName: string;
	let clients = [{}];
	let selectedRowIds: Array<string> = [];
	let columnsToEdit = ['is_active', 'name'];
	let upData: Array<object> = [];

	onMount(async () => {
		clients = await getClients();
	});
	async function onSubmit() {
		const res = await fetch('http://localhost:8002/api/clients/', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				name: newClientsName,
				is_active: true,
				created_at: Date.now(),
				updated_at: Date.now()
			})
		});
		clients = await getClients();
	}
	async function onUpdate() {
		const updateRes = await fetch('http://localhost:8002/api/clients/bulk_update', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(upData)
		});
		clients = await getClients();
		upData = [];
		selectedRowIds = [];
	}
</script>

<Grid>
	<Row>
		<Column>
			<TextInput placeholder="new client's name" bind:value={newClientsName} />
		</Column>
		<Column>
			<Button size="small" kind="primary" on:click={onSubmit}>Submit</Button>
		</Column>
		<Column />
	</Row>
	<Row>
		<Column>
			<EditableDatatable
				headers={[
					{ key: 'id', value: 'ID' },
					{ key: 'name', value: 'NAME' },
					{ key: 'is_active', value: 'IS ACTIVE' }
				]}
				rows={clients}
				{columnsToEdit}
				bind:selectedRowIds
				bind:upData
				{onUpdate}
			/>
		</Column>
	</Row>
</Grid>
