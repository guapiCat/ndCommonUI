#### 使用说明

- 将获取的格式配置数据, 需要显示的名称和对应的值, 处理成对象数组传入即可
- 默认使用的键值字段为extName和extension, 可以传入props进行自定义



#### 基础使用

<common-code-format>

  <template #source>
    <APP-ndExtTable-ndExtTable></APP-ndExtTable-ndExtTable>
  </template>

  @[code](../.vuepress/components/APP/ndExtTable/ndExtTable.vue)

</common-code-format>


#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| extConfig          | 数据源 | `Array` | []            |
| props          | 自定义的key和value对象, 用户重置默认使用数据源中的键值字段 | `Object` | {} `默认使用{key: 'extName', value: 'extension'}` |
| propClass          | 最外层标签的类名 | `String` | -          |




















