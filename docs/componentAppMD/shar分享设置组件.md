#### app分享设置组件说明

- 介绍：分享组件

#### 基础使用

<br />

<common-code-format>
  <template #source>
    <APP-ndSharSetting-ndSharSetting></APP-ndSharSetting-ndSharSetting>
  </template>

  @[code](../.vuepress/components/APP/ndSharSetting/ndSharSetting.vue)

</common-code-format>

#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
|shareConfig	|  分享参数对象	| Object | {} |


#### 事件说明

| 事件名       | 说明                                                     | 回调参数                                                     |
| ------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| confirmShar      | 点击分享选项卡时触发    |    ( obj, str ) obj: 分享的参数对象  str: 点击的选项卡的序号  |
