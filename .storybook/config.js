import { configure } from '@storybook/react';
import { setOptions } from "@storybook/addon-options";
// Option defaults:
setOptions({
  /**
   * Name to display in the top left corner
   * @type {String}
   */
  name: 'Vercidesign',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'https://github.com/Jerbits',
  /**
   * Show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * Display left panel that shows a list of stories
   * @type {Boolean}
   */
  showLeftPanel: true,
  /**
   * Display horizontal panel that displays addon configurations
   * @type {Boolean}
   */
  showDownPanel: false,
  /**
   * Display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * Show horizontal addons panel as a vertical panel on the right
   * @type {Boolean}
   */
  downPanelInRight: false,
  /**
   * Sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * Regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,
  /**
   * Sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,
  /**
   * ID to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
})
// This will search the /src/components/ folder (and sub-folders) for any files that match <filename>.story.js 
// (e.g /src/components/Button/Button.story.js)
const req = require.context('../src/components/', true, /(\.story\.js$)|(\.story\.jsx$)/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module)