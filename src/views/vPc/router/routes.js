function pcload(component) {
    return import(/* webpackChunkName: "about" */ `../views/${component}`)
    // return resolve => require([`../pc/views/${component}`], resolve);
}

const pcRoutes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: 'home',   
        path: '/home',
        component: () => pcload('home'),
        meta: { title: '首页' },
        children: [     // 子路由
            { path: '/demo', name: "demo", component: () => pcload('demo/demo') },    // demo页面
            { path: '/test', name: "test", component: () => pcload('test/test') },    // test页面
        ]
    },
    {
        path: '/:pathMatch(.*)',
        redirect: {
            path: '/'
        }
    }
];

let routes = pcRoutes

export default routes;
