import { configure, addDecorator } from '@storybook/react'
import { select, withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
