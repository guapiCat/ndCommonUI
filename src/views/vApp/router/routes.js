function appLoad(component) {
    return import(/* webpackChunkName: "about" */ `../views/${component}`)
}
function appComponents(component) {
    return import(/* webpackChunkName: "about" */ `../components/lookPicture/${component}`)
}
const appRoutes = [
    {
        path: '/',
        name: 'apphome',
        component:  () => appLoad('home'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/openfile',
        name: 'openfile',
        component:  () => appComponents('openfile'),
        meta: {
          title: "打开图纸(第三方)"
        }
    },
    {
        path: '/openview',
        name: 'openview',
        component:  () => appComponents('openview'),
        meta: {
          title: "打开图纸(本地)"
        }
    },
    {
        path: '/preview',
        name: 'preview',
        component:  () => appLoad('preview'),
        meta: {
          title: "预览页面"
        }
    },
    
    {
        path: '/:pathMatch(.*)',
        redirect: {
            path: '/'
        }
    }
];

let routes = appRoutes

export default routes;
