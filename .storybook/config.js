import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// import { withInfo } from '@storybook/addon-info';
import { select, withKnobs } from '@storybook/addon-knobs';
// import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import backgrounds from '@storybook/addon-backgrounds';
import '@storybook/addon-console';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';

// addDecorator(withInfo())
setConsoleOptions({
  panelExclude: [],
});
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

setOptions({
  name: 'Spectre React Components',
  url: 'https://github.com/CodeDraken/spectre-react',
  showAddonPanel: true,
})

addDecorator(withKnobs)

addDecorator(backgrounds([
  { name: 'twitter', value: '#00aced' },
  { name: 'facebook', value: '#3b5998' },
]))


// configureViewport({
//   viewports: {
//     ...INITIAL_VIEWPORTS
//   }
// })

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
