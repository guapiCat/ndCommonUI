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


/**自定义组件。打开nd-lib/package-component.html页面，生成下载一个js文件。复制到此处 */
/**复制区域start */
const components = {ndSwitch}
/**复制区域end */


// 定义 install 方法
export function install(app) {
  const keys = Object.keys(components);
  keys.map((name) => {
    const component = components[name];
    app.component(component.name || name, component);
  })
}