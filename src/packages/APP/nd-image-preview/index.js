import ndImagePreview from './src/nd-image-preview.vue';
// import { showImagePreview } from 'vant';

// install component导出
ndImagePreview.install = function(app) {
    app.component(ndImagePreview.name, ndImagePreview);
}

//   TODO 放组件函数插件中
// const ndShowImagePreview = (options) => {
//     return showImagePreview(options)
// }

// export {
//     ndImagePreview,
//     // ndShowImagePreview
// }

export default ndImagePreview