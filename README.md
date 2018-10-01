
# Spectre React Components

[![Build Status](https://travis-ci.com/CodeDraken/spectre-react.svg?branch=master)](https://travis-ci.com/CodeDraken/spectre-react)

React components for the [Spectre CSS library](https://picturepan2.github.io/spectre/index.html).

This project was started during the React Riot Hackathon. It's not fully complete, you can view the components in a Storybook. ( see link below )

View the components on the [GitHub Page](https://codedraken.github.io/spectre-react/)

## Contributing Instructions

1. Fork the repo and download / clone your fork.
2. Make a new branch name it something like `add-{ComponentName}`
3. Run `npm install`
4. Make your changes follwing the [Standard JS style](https://standardjs.com/) ( run `npm run lint` and `npm run lint-fix` if you don't want to install Standard )
5. Make sure all tests pass and there are no issues when you run `npm run lint`

### Commands

`npm run storybook` - starts storybook on `localhost:6006` This is the main way to preview the components. You make a component, add stories for it and play around with it.

`npm test` - runs unit tests using Jest

`npm run lint` - runs the Standard JS linter

`npm run lint-fix` - runs Standard and tries to fix detected issues

`npm run build` - outputs minified, processed code into `dist/index.js` Use this to test the components like you would if you had installed the package from npm. i.e `import { Button } from 'dist'`

`storybook-deploy` - deploys storybook to gh-pages branch.
