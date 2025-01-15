import ndAlert from './nd-alert';
import ndAvatar from './nd-avatar';
import ndBreadcrumb from './nd-breadcrumb';
import ndButton from './nd-button';
import ndCalendard from './nd-calendars';
import ndCard from './nd-card';
import ndCarousel from './nd-carousel';
import ndCarouselItem from './nd-carousel-item';
import ndCollapse from './nd-collapse';
import ndDescriptions from './nd-descriptions';
import ndDialog from './nd-dialog';
import ndDrawer from './nd-drawer';
import ndDropdown from './nd-dropdown';
import ndDropdownItem from './nd-dropdown-item';
import ndEmpty from './nd-empty';
import ndInput from './nd-input';
import ndInputNumber from './nd-input-number';
import ndPagination from './nd-pagination';
import ndPopconfirm from './nd-popconfirm';
import ndProgress from './nd-progress';
import ndRadio from './nd-radio';
import ndResult from './nd-result';
import ndSelect from './nd-select';
import ndSlider from './nd-slider';
import ndSteps from './nd-steps';
import ndSwitch from './nd-switch';
import ndTabPane from './nd-tab-pane';
import ndTable from './nd-table';
import ndTabs from './nd-tabs';
import ndTag from './nd-tag';
import ndTimeLine from './nd-time-line';
import ndTooltip from './nd-tooltip';


import ndMessage from './nd-message';

// import ElementPlus from "element-plus"
import 'element-plus/dist/index.css';

// const components = [
//   ndTable,
//   ndPagination,
//   ndButton,
//   ndSwitch,
// ];

const components = {
  ndAlert,
  ndAvatar,
  ndBreadcrumb,
  ndButton,
  ndCalendard,
  ndCard,
  ndCarousel,
  ndCarouselItem,
  ndCollapse,
  ndDescriptions,
  ndDialog,
  ndDrawer,
  ndDropdown,
  ndDropdownItem,
  ndEmpty,
  ndInput,
  ndInputNumber,
  ndPagination,
  ndPopconfirm,
  ndProgress,
  ndRadio,
  ndResult,
  ndSelect,
  ndSlider,
  ndSteps,
  ndSwitch,
  ndTabPane,
  ndTable,
  ndTabs,
  ndTag,
  ndTimeLine,
  ndTooltip,

  ndMessage,
};

// 定义 install 方法
function install(app) {
  // app.use(ElementPlus)

  const keys = Object.keys(components);
  keys.map((name) => {
    const component = components[name];
    app.component(component.name || name, component);
  })
}

export default {
  version: "0.0.1",
  install,
  ...components
}