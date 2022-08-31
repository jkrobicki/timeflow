<script lang="ts">
	import { onMount } from 'svelte';
	import { getSponsors, getTeams, getEpics } from './data.js';
	import EditableDatatable from '../library/components/EditableDatatable.svelte';
	import Autocomplete from '../library/components/autocomplete.svelte';

	import { Grid, Column, Row, Button, TextInput } from '../library/carbon/components';
	let epics = [{}];
	let teams = [{}];
	let sponsors: Array<object>;
	let selectedRowIds: Array<string> = [];
	let newEpicsFullName: string;
	let newEpicsShortName: string;
	let columnsToEdit = ['epic_name', 'short_name', 'team_name', 'start_date', 'is_active'];
	let selectedTeam: Object = {};
	let selectedSponsor: Object = {};
	let startDate: string = '';
	let upData: Array<object> = [];
	onMount(async () => {
		epics = await getEpics();
	});

	onMount(async () => {
		sponsors = await getSponsors();
	});
	onMount(async () => {
		teams = await getTeams();
	});
	async function onSubmit() {
		const res = await fetch('http://localhost:8002/api/epics/', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				team_id: selectedTeam.id,
				sponsor_id: selectedSponsor.id,
				name: newEpicsFullName,
				short_name: newEpicsShortName,
				start_date: startDate,
				is_active: true,
				created_at: Date.now(),
				updated_at: Date.now()
			})
		});
		console.log(
			JSON.stringify({
				team_id: selectedTeam.id,
				sponsor_id: selectedSponsor.id,
				name: newEpicsFullName,
				short_name: newEpicsShortName,
				start_date: startDate,
				is_active: true,
				created_at: Date.now(),
				updated_at: Date.now()
			})
		);
		epics = await getEpics();
	}
	async function onUpdate() {
		const updateRes = await fetch('http://localhost:8002/api/sponsors/bulk_update', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(upData)
		});
		epics = await getEpics();
		upData = [];
		selectedRowIds = [];
	}
</script>

start date is {startDate}
<Grid>
	<Row>
		<Column>
			<TextInput placeholder="new epic's full name" bind:value={newEpicsFullName} />
		</Column>
		<Column>
			<TextInput placeholder="new epic's short name" bind:value={newEpicsShortName} />
		</Column>
		<Column>
			<input class="month-picker" type="date" bind:value={startDate} />
		</Column>
		<Autocomplete
			options={teams}
			selectDisplay="team_name"
			bind:selectedOption={selectedTeam}
			placeholder="select team"
		/>
		<Autocomplete
			options={sponsors}
			selectDisplay="sponsor_name"
			bind:selectedOption={selectedSponsor}
			placeholder="search sponsor"
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
					{ key: 'epic_name', value: "FULL SPONSOR'S NAME" },
					{ key: 'short_name', value: "SHORT SPONSOR'S NAME" },
					{ key: 'team_name', value: "TEAM'S NAME" },
					{ key: 'sponsor_short_name', value: "SPONSORS'S NAME" },
					{ key: 'is_active', value: 'IS ACTIVE' }
				]}
				rows={epics}
				{columnsToEdit}
				bind:selectedRowIds
				bind:upData
				{onUpdate}
				autocompleteOptions={epics}
			/>
		</Column>
	</Row>
</Grid>
