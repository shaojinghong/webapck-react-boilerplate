# Webpack React Boilerplate

A simple React Application boilerplate which routes to different pages on user interaction, made from scratch using Babel, Webpack, React Router.

## Features

- [webpack 4](https://github.com/webpack/webpack)
- [babel 7](https://github.com/babel/babel) transforming JSX and ES6, ES7, ES8
- [react](https://github.com/facebook/react) `16.8`
- [react-router](https://reacttraining.com/react-router/) `5.0.0`
- [lodash](https://github.com/lodash/lodash)
- [happypack](https://github.com/amireh/happypack) HappyPack makes initial webpack builds faster by transforming files in parallel.
- [eslint](https://github.com/eslint/eslint/) with airbnb config.
- [prettier](https://github.com/prettier/prettier) Prettier is an opinionated code formatter.
- [style](https://github.com/webpack-contrib/style-loader) & [css-Loader](https://github.com/webpack-contrib/css-loader) & [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [postcss](https://postcss.org/)
- [stylelint](https://stylelint.io/) with standard config.
- [browserslist](https://github.com/browserslist/browserslist) Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env.
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) Tweak React components in real time.
- [webpack-dev-serve](https://github.com/webpack/webpack-dev-server) Serves a webpack app. Updates the browser on changes.
- [Jest](https://facebook.github.io/jest/) with [Enzyme](http://airbnb.io/enzyme/) for testing.
- [lint-staged](https://github.com/okonet/lint-staged) Precommit hooks via lint-staged + Husky.
- [commitlint](https://github.com/conventional-changelog/commitlint) Lint commit messages.
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) Visualize size of webpack output files with an interactive zoomable treemap.

## How to use

1. Clone the boilerplate repo.

   ```shell
     git clone git@git.internal.yunify.com:elvis/react-boilerplate.git
   ```

2. `npm i` to install npm packages.

3. Use `npm run build:dll` to build dlls.

4. Start dev server using `npm run dev`.

5. Build and bundling your resources for production `npm run build`.

6. Lint your code using `npm run lint`.

7. Use `npm run build --report` Starts webpack-bundle-analyzer to give you the opportunity to analyze your bundles.

## npm scripts

- `npm run dev` – starts development server with webpack-dev-server.
- `npm run build` – builds project to production.
- `npm run lint` – lints both JavaScript (with `npm run lint:js`) and Sass files (with `npm run lint:scss`).
- `npm test` – runs tests with Jest.
