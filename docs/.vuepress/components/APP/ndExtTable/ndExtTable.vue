<template>
    <div class="my-page">
      <nd-ext-table :extConfig="data1"></nd-ext-table>
      <h5>使用自定键值控制显示</h5>
      <nd-ext-table :extConfig="data2" :props="propsConfig"></nd-ext-table>
    </div>
  </template>
  
  <script>
  import { reactive, toRefs} from 'vue';
  import ndExtTable from '../../../../../src/packages/APP/nd-extTable/src/nd-extTable.vue';
  
  export default {
    name: '',
    components: { ndExtTable },
    setup() {
      const data = reactive({ 
        propsConfig: {
            key: 'name',
            value: 'value'
        },
        data1: [
            {extName: '3D图纸', extension: '.sldprt,.sldasm,.prt,.prt.*,.asm,.asm.*,.par,.psm,.ipt,.iam,.CATPart,.CATProduct,.cgr,.model,.exp,.session,.x_t,.xmt_txt,.x_b,.xmt_bin,.p_b,.xmp_bin,.p_t,.xmp_txt,.sat,.sab,.asat,.asab,.igs,.iges,.stp,.step,.stpZ,.stpx,.jt,.xcgm,.3dm,.3dxml,.stl,.obj,.3mf,.vda,.idb,.idf,.emn,.ics'},
            {extName: '2D图纸', extension: '.dwg,.dxf,.pdf,.dgn,.exb'},
            {extName: 'BIM图纸', extension: '.rvt,.ifc'}
        ],
        data2: [
            {name: '3D图纸', value: '.sldprt,.sldasm,.prt,.prt.*,.asm,.asm.*,.par,.psm,.ipt,.iam,.CATPart,.CATProduct,.cgr,.model,.exp,.session,.x_t,.xmt_txt,.x_b,.xmt_bin,.p_b,.xmp_bin,.p_t,.xmp_txt,.sat,.sab,.asat,.asab,.igs,.iges,.stp,.step,.stpZ,.stpx,.jt,.xcgm,.3dm,.3dxml,.stl,.obj,.3mf,.vda,.idb,.idf,.emn,.ics'},
            {name: '2D图纸', value: '.dwg,.dxf,.pdf,.dgn,.exb'},
            {name: 'BIM图纸', value: '.rvt,.ifc'},
            {name: '通用文件', value: '.pdf,.bmp,.jpg,.jpeg,.png,.gif,.doc,.docx,.docm,.xls,.xlsx,.xlsb,.xlsm,.ppt,.pptx,.pptm'}
        ],
      });
  
      const refData = toRefs(data);
      return {
        ...refData,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>