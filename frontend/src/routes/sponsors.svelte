<script lang="ts">
	import { onMount } from 'svelte';
	import { getSponsors } from './data.js';
	import { getClients } from './data.js';
	import EditableDatatable from '../library/components/EditableDatatable.svelte';
	import Autocomplete from '../library/components/autocomplete.svelte';

	import { Grid, Column, Row, Button, TextInput } from '../library/carbon/components';
	let sponsors = [{}];
	let clients: Array<object>;
	let selectedRowIds: Array<string> = [];
	let newSponsorsFullName: string;
	let newSponsorsShortName: string;
	let columnsToEdit = ['sponsor_name', 'sponsor_short_name', 'is_active', 'client_name'];
	let selectedClient: Object = {};
	let upData: Array<object> = [];

	if (selectedRowIds === []) {
		upData = [];
	}
	onMount(async () => {
		sponsors = await getSponsors();
	});
	onMount(async () => {
		clients = await getClients();
	});
	async function onSubmit() {
		const res = await fetch('http://localhost:8002/api/sponsors/', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				client_id: selectedClient.id,
				name: newSponsorsFullName,
				short_name: newSponsorsShortName,
				is_active: true,
				created_at: Date.now(),
				updated_at: Date.now()
			})
		});
		sponsors = await getSponsors();
	}
	async function onUpdate() {
		const updateRes = await fetch('http://localhost:8002/api/sponsors/bulk_update', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(upData)
		});
		sponsors = await getSponsors();
		upData = [];
		selectedRowIds = [];
	}
</script>

<Grid>
	<Row>
		<Column>
			<TextInput placeholder="new sponsor's full name" bind:value={newSponsorsFullName} />
		</Column>
		<Column>
			<TextInput placeholder="new sponsor's short name" bind:value={newSponsorsShortName} />
		</Column>
		<Autocomplete
			options={clients}
			selectDisplay="name"
			bind:selectedOption={selectedClient}
			placeholder="search client"
		/>

		<Column>
			<Button size="small" kind="primary" on:click={onSubmit}>Submit</Button>
		</Column>
	</Row>
	<Row>
		<Column>
			<EditableDatatable
				headers={[
					{ key: 'id', value: 'ID' },
					{ key: 'sponsor_name', value: "FULL SPONSOR'S NAME" },
					{ key: 'sponsor_short_name', value: "SHORT SPONSOR'S NAME" },
					{ key: 'client_name', value: "CLIENT'S NAME" },
					{ key: 'is_active', value: 'IS ACTIVE' }
				]}
				rows={sponsors}
				{columnsToEdit}
				bind:selectedRowIds
				bind:upData
				{onUpdate}
				autocompleteOptions={clients}
			/>
		</Column>
	</Row>
</Grid>
