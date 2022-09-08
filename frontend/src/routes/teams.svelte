<script lang="ts">
	import { onMount } from 'svelte';
	import { getTeams } from './data.js';
	import { getUsers } from './data.js';
	import EditableDatatable from '../library/components/EditableDatatable.svelte';
	import Autocomplete from '../library/components/autocomplete.svelte';

	import { Grid, Column, Row, Button, TextInput } from '../library/carbon/components';
	let teams = [{}];
	let users: Array<object>;
	let selectedRowIds: Array<string> = [];
	let newTeamsFullName: string;
	let newTeamsShortName: string;
	let columnsToEdit = ['team_name', 'team_short_name', 'is_active', 'username', 'full_lead_name'];
	let selectedUser: Object = {};
	let updatedData: Array<object> = [];

	if (selectedRowIds === []) {
		updatedData = [];
	}
	onMount(async () => {
		teams = await getTeams();
	});
	onMount(async () => {
		users = await getUsers();
	});
	async function onSubmit() {
		const res = await fetch('http://localhost:8002/api/teams/', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				lead_user_id: selectedUser.id,
				name: newTeamsFullName,
				short_name: newTeamsShortName,
				is_active: true,
				created_at: Date.now(),
				updated_at: Date.now()
			})
		});
		teams = await getTeams();
	}
	async function onUpdate() {
		const updateRes = await fetch('http://localhost:8002/api/teams/bulk_update', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' }
		});
		teams = await getTeams();
		updatedData = [];
		selectedRowIds = [];
	}
</script>

<Grid>
	<Row>
		<Column>
			<TextInput placeholder="new team's full name" bind:value={newTeamsFullName} />
		</Column>
		<Column>
			<TextInput placeholder="new team's short name" bind:value={newTeamsShortName} />
		</Column>
		<Autocomplete
			options={users}
			selectDisplay="full_name"
			bind:selectedOption={selectedUser}
			placeholder="select user lead"
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
					{ key: 'team_name', value: "FULL TEAM'S NAME" },
					{ key: 'team_short_name', value: "SHORT TEAM'S NAME" },
					{ key: 'full_lead_name', value: 'USER LEAD' },
					{ key: 'is_active', value: 'IS ACTIVE' }
				]}
				rows={teams}
				{columnsToEdit}
				bind:selectedRowIds
				bind:updatedData
				{onUpdate}
				autocompleteOptions={users}
			/>
		</Column>
	</Row>
</Grid>
