import ndNotify from './src/nd-notify.vue';
// import { showNotify, closeNotify, setNotifyDefaultOptions, resetNotifyDefaultOptions } from 'vant';

ndNotify.install = function(app) {
    app.component(ndNotify.name, ndNotify);
}

//   TODO 放组件函数插件中
// const ndShowNotify = (options) => {
//     return showNotify(options)
// }

// const ndCloseNotify = () => {
//     return closeNotify();
// }

// const ndSetNotifyDefaultOptions = (options) => {
//     return setNotifyDefaultOptions(options);
// }

// const ndResetNotifyDefaultOptions = () => {
//     return resetNotifyDefaultOptions();
// }

// export {
//     ndNotify,
//     // ndShowNotify,
//     // ndCloseNotify,
//     // ndSetNotifyDefaultOptions,
//     // ndResetNotifyDefaultOptions
// }

export default ndNotify