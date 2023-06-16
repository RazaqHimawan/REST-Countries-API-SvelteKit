export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.57898c98.js","app":"_app/immutable/entry/app.ecc6036f.js","imports":["_app/immutable/entry/start.57898c98.js","_app/immutable/chunks/index.62ec8c34.js","_app/immutable/chunks/singletons.2b91b5e5.js","_app/immutable/chunks/index.bd632bad.js","_app/immutable/entry/app.ecc6036f.js","_app/immutable/chunks/index.62ec8c34.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[name]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
