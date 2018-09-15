import { configure } from '@storybook/react'

// function loadStories() {
//   require('../stories/index.js')
//   // You can require as many stories as you need.
// }

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
