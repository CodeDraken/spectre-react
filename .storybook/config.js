import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// import { withInfo } from '@storybook/addon-info';
import { select, withKnobs } from '@storybook/addon-knobs';
// import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import backgrounds from '@storybook/addon-backgrounds';

// addDecorator(withInfo())

setOptions({
  name: 'Spectre React Components',
  url: 'https://github.com/Hackbit/reactriot2018-codedraken',
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
