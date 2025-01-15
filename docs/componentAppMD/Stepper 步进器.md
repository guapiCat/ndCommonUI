#### 基础使用


<br />

<common-code-format>
  <template #source>
    <APP-ndStepper-ndStepper></APP-ndStepper-ndStepper>
  </template>

  @[code](../.vuepress/components/APP/ndStepper/ndStepper.vue)

</common-code-format>


#### 参数配置 Props

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| max         | 最大值 |  number 或 string  |             |
| min         | 最小值 | number 或 string |             |
| step         | 每次改变值大小 | number 或 string |             |
| ...$attrs          | vant属性 |  |             |



#### 事件 Tabs Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| change     | 绑定值发生变化 |  |
| ...$attrs      | vant方法 |  |




















