export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/capacities.svelte"),
	() => import("../../src/routes/clients.svelte"),
	() => import("../../src/routes/epic-areas.svelte"),
	() => import("../../src/routes/epics.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/roles.svelte"),
	() => import("../../src/routes/sponsors.svelte"),
	() => import("../../src/routes/teams.svelte"),
	() => import("../../src/routes/timelogs.svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"capacities": [[0, 2], [1]],
	"clients": [[0, 3], [1]],
	"epic-areas": [[0, 4], [1]],
	"epics": [[0, 5], [1]],
	"roles": [[0, 7], [1]],
	"sponsors": [[0, 8], [1]],
	"teams": [[0, 9], [1]],
	"timelogs": [[0, 10], [1]]
};