#### IconClass 图标说明
- 使用场景：图标
- 来源：[阿里云图库](https://www.iconfont.cn/manage/index?spm=a313x.home_index.i3.23.58a33a817JUuni&manage_type=myprojects&projectId=3538773)
- 云图库图标接入方式：Font Class，资源说明：包含3个字体文件和1个css文件，引用css文件即可
- 需要业务自己集成图标资源包，资源可从项目中拿：docs/.vuepress/styles/iconClass
- 云图库资源需下载到本地保证稳定性，不要用远程链接

#### 基础使用
通过type设置图标类型，通过class自定义修改图标样式


<br />

<common-code-format>
  <template #source>
    <APP-ndIconClass-ndIconClass></APP-ndIconClass-ndIconClass>
  </template>

  @[code](../.vuepress/components/APP/ndIconClass/ndIconClass.vue)

</common-code-format>

#### ndAppIconClass 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| type              | 图标类型，对应云图库中的class                 |  String     |             |
| class                  | 设置class，用于修改大小，颜色等                   |  String     |             |

