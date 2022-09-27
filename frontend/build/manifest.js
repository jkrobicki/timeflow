export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-ea112586.js","imports":["_app/immutable/start-ea112586.js","_app/immutable/chunks/index-f831fcd5.js","_app/immutable/chunks/index-c5ea608b.js"],"stylesheets":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/6.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/7.js'),
			() => import('./server/nodes/8.js'),
			() => import('./server/nodes/9.js'),
			() => import('./server/nodes/10.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "data",
				pattern: /^\/data\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/data.js')
			},
			{
				type: 'page',
				id: "capacities",
				pattern: /^\/capacities\/?$/,
				names: [],
				types: [],
				path: "/capacities",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "clients",
				pattern: /^\/clients\/?$/,
				names: [],
				types: [],
				path: "/clients",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "epic-areas",
				pattern: /^\/epic-areas\/?$/,
				names: [],
				types: [],
				path: "/epic-areas",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "epics",
				pattern: /^\/epics\/?$/,
				names: [],
				types: [],
				path: "/epics",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "roles",
				pattern: /^\/roles\/?$/,
				names: [],
				types: [],
				path: "/roles",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "sponsors",
				pattern: /^\/sponsors\/?$/,
				names: [],
				types: [],
				path: "/sponsors",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "teams",
				pattern: /^\/teams\/?$/,
				names: [],
				types: [],
				path: "/teams",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "timelogs",
				pattern: /^\/timelogs\/?$/,
				names: [],
				types: [],
				path: "/timelogs",
				shadow: null,
				a: [0,10],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
