import { ndAppDialog, ndAppDialogFn } from './nd-dialog'
import { ndAppPopup, ndAppPopupFn } from './nd-popup'
import { ndAppToast, showToast, closeToast } from './nd-toast'
import ndAppActionSheet from './nd-action-sheet'
import ndAppBadge from './nd-badge'
import ndAppButton from './nd-button'
import ndAppCalendar from './nd-calendar'
import ndAppCascader from './nd-cascader'
import ndAppCell from './nd-cell'
import ndAppCheckbox from './nd-checkbox'
import ndAppCheckboxItem from './nd-checkbox-item'
import ndAppCircle from './nd-circle'
import ndAppCollapse from './nd-collapse'
import ndAppCollapseItem from './nd-collapse-item'
import ndAppDatepicker from './nd-datepicker'
import ndAppDropdownItem from './nd-dropdown-item'
import ndAppDropdownMenu from './nd-dropdown-menu'
import ndAppEmpty from './nd-empty'
import ndAppGrid from './nd-grid'
import ndAppGridItem from './nd-grid-item'
import ndAppImagePreview from './nd-image-preview'
import ndAppIndexAnchor from './nd-index-anchor'
import ndAppIndexBar from './nd-index-bar'
import ndAppInput from './nd-input'
import ndAppLoading from './nd-loading'
import ndAppNotify from './nd-notify'
import ndAppNumberKeyboard from './nd-number-keyboard'
import ndAppOverlay from './nd-overlay'
import ndAppProgress from './nd-progress'
import ndAppPasswordInput from './nd-password-input'
import ndAppPicker from './nd-picker'
import ndAppPickerGroup from './nd-picker-group'
import ndAppPopover from './nd-popover'
import ndAppPullRefresh from './nd-pull-refresh'
import ndAppRadio from './nd-radio'
import ndAppRadioItem from './nd-radio-item'
import ndAppSearch from './nd-search'
import ndAppSidebar from './nd-sidebar'
import ndAppSiderbarItem from './nd-sidebar-item'
import ndAppSider from './nd-slider'
import ndAppStep from './nd-step'
import ndAppStepper from './nd-stepper'
import ndAppSteps from './nd-steps'
import ndAppSwipeCell from './nd-swipe-cell'
import ndAppSwitch from './nd-switch'
import ndAppTab from './nd-tab'
import ndAppTabs from './nd-tabs'
import ndAppTabbar from './nd-tabbar'
import ndAppTag from './nd-tag'
import ndAppVanForm from './nd-van-form'
import ndAppViewerSharing from './nd-viewer-sharing'
import ndAppTreeSelect from './nd-treeSelect'
import ndAppList from './nd-list'
import ndAppListCell from './nd-list-cell'
import ndAppTextEllipsis from './nd-textEllipsis'
import ndAppIconfont from './nd-iconfont'
import ndAppIconClass from './nd-icon-class';
import ndAppSticky from './nd-sticky'
import ndAppSwipe from './nd-swipe'
import ndAppSwipeItem from './nd-swipe-item'
import ndAppSharSetting from './nd-shar-setting'

// import Vant from "vant"
//import 'vant/lib/index.css';
// 需打包的组件
const components = {
  ndAppTabbar,
  ndAppActionSheet,
  ndAppBadge,
  ndAppButton,
  ndAppCalendar,
  ndAppCascader,
  ndAppCell,
  ndAppCheckbox,
  ndAppCheckboxItem,
  ndAppCircle,
  ndAppCollapse,
  ndAppCollapseItem,
  ndAppDatepicker,
  ndAppDialog,
  ndAppDropdownItem,
  ndAppDropdownMenu,
  ndAppEmpty,
  ndAppGrid,
  ndAppGridItem,
  ndAppImagePreview,
  ndAppIndexAnchor,
  ndAppIndexBar,
  ndAppInput,
  ndAppLoading,
  ndAppNotify,
  ndAppNumberKeyboard,
  ndAppOverlay,
  ndAppProgress,
  ndAppPasswordInput,
  ndAppPicker,
  ndAppPickerGroup,
  ndAppPopover,
  ndAppPullRefresh,
  ndAppRadio,
  ndAppRadioItem,
  ndAppSearch,
  ndAppSidebar,
  ndAppSiderbarItem,
  ndAppSider,
  ndAppStep,
  ndAppStepper,
  ndAppSteps,
  ndAppSwipeCell,
  ndAppSwitch,
  ndAppTab,
  ndAppTabbar,
  ndAppTabs,
  ndAppTag,
  ndAppVanForm,
  ndAppPopup,
  ndAppViewerSharing,
  ndAppTreeSelect,
  ndAppList,
  ndAppListCell,
  ndAppTextEllipsis,
  ndAppToast,
  ndAppIconfont,
  ndAppIconClass,
  ndAppSticky,
  ndAppSwipe,
  ndAppSwipeItem,
  ndAppSharSetting
}

// 定义 install 方法
function install(app) {
  /**
   * 组件注册
   */
  const keys = Object.keys(components);
  keys.map((name) => {
    const component = components[name];
    app.component(component.name || name, component);
  })
  /**
   * 挂载方法到全局上
   */
  app.config.globalProperties.$ndAppDialogFn = ndAppDialogFn;
  app.config.globalProperties.$ndAppPopupFn = ndAppPopupFn;
}

export default {
  version: "0.0.1",
  install,
  showToast,
  closeToast,
  ...components
}