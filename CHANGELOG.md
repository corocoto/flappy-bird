# Change history

This file describes notable changes in each version of Flappy Bird application.

## What's new?
### Added
* _CI/CD_: Adds opportunity to cache installation step;
* Adds CD to [`gh-pages`](https://pages.github.com/) service;
* Adds opportunity to run deploy workflow only on release publishing process.

### Changed
* _CI/CD_: Move jobs with same context (such as linting process, various type of tests, etc.) to one workflow
* Forms changelog list;
* Replace tests that used `enzyme`-like packages onto react testing library usage;
* Changes [`eslint-webpack-plugin`](https://webpack.js.org/plugins/eslint-webpack-plugin/) package version (from `^3.1.1` to `^2.6.0`). It needs to prevent conflicts between packages on installation step.
* Changes using version of `actions/checkout` (from v2 to v3);
* Changes using version of `actions/setup-node` (from v1 to v3). 

### Removed
* Removes [`enzyme`](https://enzymejs.github.io/enzyme/) package;
* Removes [`enzyme-adapter-react-16`](https://www.npmjs.com/package/enzyme-adapter-react-16) package.

### Security
* Fixes vulnerability issue.

## 1.1.3 (11 April 2021)
### Added
* Adds opportunity to run project in Docker;
* Adds [`.eslintignore`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/.eslintignore) file;
* Adds opportunity [to run E2E tests job on CI](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/.github/workflows/e2e-tests.yml);
* Adds opportunity [to run editorconfig-checker job on CI](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/.github/workflows/editorconfig.yml);
* Adds opportunity [to run eslint-checker job on CI](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/.github/workflows/eslint.yml);
* Adds [`Makefile`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/Makefile);
* Adds displaying new badges at [README](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/README.md) file;
* Adds [section about running application in Docker](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/README.md#docker) at README file;
* Adds using [`eslint-webpack-plugin`](https://www.npmjs.com/package/eslint-webpack-plugin) package;
* Creates [config for `cypress`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/cypress.json);
* [Creates E2E tests](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/cypress/integration/flappy-bird.spec.js);
* Adds [`local-build`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/package.json#L25) script;
* Adds [`test:ci`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/package.json#L27) script;
* Adds [`eslint-fix`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/package.json#L30) script;
* Adds [`eslint-check`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/package.json#L31) script;
* Adds [`editorconfig-check`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/package.json#L32) script;
* Adds [`e2e:visual`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/package.json#L33) script;
* Adds [`e2e:ci`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/package.json#L34) script;
* Adds [`@types/node`](https://www.npmjs.com/package/@types/node) package to `dependencies` list;
* Adds [`@types/react`](https://www.npmjs.com/package/@types/react) package to `dependencies` list;
* Adds [`@types/react-dom`](https://www.npmjs.com/package/@types/react-dom) package to `dependencies` list;
* Adds [`@types/lodash`](https://www.npmjs.com/package/@types/lodash) package to `devDependencies` list;
* Adds [`@types/react-router-dom`](https://www.npmjs.com/package/@types/react-router-dom) package to `devDependencies` list;
* Integrates [`typescript`](https://www.npmjs.com/package/typescript) to the project;
* Adds [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) package to `devDependencies` list;
* Adds [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) package to `devDependencies` list;
* Integrates [`cypress`](https://www.npmjs.com/package/cypress)  to the project;
* Adds [`@editorconfig-checker`](https://www.npmjs.com/package/editorconfig-checker) package to `devDependencies` list;
* Adds [`eslint-plugin-flowtype`](https://www.npmjs.com/package/eslint-plugin-flowtype) package to `devDependencies` list;
* Adds [`start-server-and-test`](https://www.npmjs.com/package/start-server-and-test) package to `devDependencies` list;
* Add snapshot tests for all visual components;
* Add lazy-loading process for some components;
* Refactors and optimized processes inside of [`Scene`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/src/containers/Menu/Scene/Scene.tsx) component;

### Changed
* Moves babel config from `package.json` to separate file ([`.babelrc`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/.babelrc));
* Moves eslint config from `package.json` to separate file ([`.eslintrc`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/.eslintrc));
* Renames `Test` to [`unit-tests` job](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/.github/workflows/unit-tests.yml);
* Changes description on [CONTRIBUTING](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/CONTRIBUTING.md) file;
* Removes using `react-dev-utils/eslintFormatter` in [webpack config](https://github.com/corocoto/flappy-bird/compare/v1.1.2...v1.1.3#diff-c49a22733230fd83e34ff3bc78014ee352ad46ce10c7c502dd2a7c3982adb0a5L334);
* [Moves `jest` config to separate file](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/jest.config.js);
* Updates [`@babel/core`](https://www.npmjs.com/package/@babel/core) package from `^7.13.10` to `^7.15.0` version;
* Updates [`@testing-library/jest-dom`](https://www.npmjs.com/package/@testing-library/jest-dom) package from `^5.11.9` to `^5.14.1` version;
* Updates [`@testing-library/react`](https://www.npmjs.com/package/@testing-library/react) package from `^11.2.5` to `^13.0.1` version;
* Updates [`@testing-library/user-event`](https://www.npmjs.com/package/@testing-library/user-event) package from `^12.8.3` to `^14.1.0` version;
* Changes fixed version for [`babel-eslint`](https://www.npmjs.com/package/babel-eslint) package;
* Updates [`babel-jest`](https://www.npmjs.com/package/babel-jest) package from `^26.6.3` to `^27.1.0` version;
* Updates [`css-loader`](https://www.npmjs.com/package/css-loader) package from `^5.1.2` to `^5.2.7` version;
* Updates [`dotenv`](https://www.npmjs.com/package/dotenv) package from fixed `8.2.0` version to `^16.0.0`;
* Updates [`dotenv-expand`](https://www.npmjs.com/package/dotenv-expand) package from fixed `5.1.0` version to `^8.0.3`;
* Updates [`eslint`](https://www.npmjs.com/package/eslint) package from `^7.22.0` to `^7.32.0` version;
* Updates [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) package from `^2.22.1` to `^2.24.2` version;
* Updates [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) package from `^7.22.0` to `^7.25.1` version;
* Updates [`fs-extra`](https://www.npmjs.com/package/fs-extra) package from `^9.1.0` to `^10.0.0` version;
* Updates [`gh-pages`](https://www.npmjs.com/package/fs-extra) package from `^3.0.0` to `^3.2.3` version;
* Updates [`gh-pages`](https://www.npmjs.com/package/fs-extra) package from `^3.0.0` to `^3.2.3` version;
* Updates [`jest`](https://www.npmjs.com/package/jest) package from `^26.6.3` to `^27.1.0` version;
* Updates [`jest-resolve`](https://www.npmjs.com/package/jest-resolve) package from `^26.6.2` to `^27.1.0` version;
* Updates [`jest-watch-typeahead`](https://www.npmjs.com/package/jest-watch-typeahead) package from `^0.6.1` to `^0.6.4` version;
* Updates [`mini-css-extract-plugin`](https://www.npmjs.com/package/mini-css-extract-plugin) package from `^1.3.9` to `^1.6.2` version;
* Updates [`optimize-css-assets-webpack-plugin`](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin) package from `^5.0.4` to `^5.0.8` version;
* Updates [`pnp-webpack-plugin`](https://www.npmjs.com/package/pnp-webpack-plugin) package from fixed `1.6.4` version to `^1.7.0`;
* Updates [`react`](https://www.npmjs.com/package/react) package from `^17.0.1` to `^18.0.0` version;
* Updates [`react-dom`](https://www.npmjs.com/package/react-dom) package from `^17.0.1` to `^18.0.0` version;
* Updates [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) package from `^5.2.0` to `^5.2.1` version;
* Updates [`resolve-url-loader`](https://www.npmjs.com/package/resolve-url-loader) package from `^3.1.2` to `^4.0.0` version;
* Updates [`webpack`](https://www.npmjs.com/package/webpack) package from fixed `4.42.0` version to `^4.46.0`;
* Changes fixed version for [`webpack-manifest-plugin`](https://www.npmjs.com/package/webpack-manifest-plugin) package;
* Changes fixed version for [`workbox-webpack-plugin`](https://www.npmjs.com/package/workbox-webpack-plugin) package;
* Removes falsy `--watchAll` flag for [`test`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/package.json#L26) script;
* [Changes `browserslist` production value to `defaults`](https://github.com/corocoto/flappy-bird/blob/bb6e7d214eaee3bb90c88c3aa5ed0bb229e336fa/package.json#L37) (it's last 2 versions for each major browsers);
* Updates [`enzyme-adapter-react-16`](https://www.npmjs.com/package/webpack) package from `^1.15.5` version to `^1.15.6`;
* Turns off opening browser by default by running npm's `start` script;

### Removed
* Removes [`postcss-safe-parser`](https://www.npmjs.com/package/postcss-safe-parser) package;
* Removes [`postcss-flexbugs-fixes`](https://www.npmjs.com/package/postcss-flexbugs-fixes) package;
* Removes [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) package;
* Removes [`eslint-loader`](https://www.npmjs.com/package/eslint-loader) package;
* Removes [`semver`](https://www.npmjs.com/package/semver) package;

## 1.1.2 (14 March 2021)
### Added
* Adds [`.editorconfig`](https://github.com/corocoto/flappy-bird/blob/41d1aa00635860dd654cd41a11e29168c2319585/.editorconfig).

### Changed
* [Replaces `npm ci` to `npm i`](https://github.com/corocoto/flappy-bird/compare/v1.1.1...v1.1.2#diff-faff1af3d8ff408964a57b2e475f69a6b7c7b71c9978cccc8f471798caac2c88R20) for the `test.yml` config on the `run` step. It needs because job was fail for this reason;
* [Sets "Tests CI" badge](https://github.com/corocoto/flappy-bird/compare/v1.1.1...v1.1.2#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5R3) for README file;
* Updates [`@babel/core`](https://www.npmjs.com/package/@babel/core) package from fixed `7.9.0` version to `^7.13.10`;
* Updates [`@svgr/webpack`](https://www.npmjs.com/package/@svgr/webpack) package from fixed `4.3.3` version to `^5.5.0`;
* Updates [`@testing-library/jest-dom`](https://www.npmjs.com/package/@testing-library/jest-dom) package from `^4.2.4` version to `^5.11.9`;
* Updates [`@testing-library/react`](https://www.npmjs.com/package/@testing-library/react) package from `^9.3.2` version to `^11.2.5`;
* Updates [`@testing-library/user-event`](https://www.npmjs.com/package/@testing-library/user-event) package from `^7.1.2` version to `^12.8.3`;
* Updates [`babel-jest`](https://www.npmjs.com/package/babel-jest) package from `24.9.0` version to `^26.6.3`;
* Updates [`babel-loader`](https://www.npmjs.com/package/babel-loader) package from `8.1.0` fixed version to `^8.2.2`;
* Updates [`babel-plugin-named-asset-import`](https://www.npmjs.com/package/babel-plugin-named-asset-import) package from `^0.3.6` version to `^0.3.7`;
* Updates [`babel-preset-react-app`](https://www.npmjs.com/package/babel-preset-react-app) package from `^9.1.2` version to `^10.0.0`;
* Updates [`camelcase`](https://www.npmjs.com/package/camelcase) package from `^5.3.1` version to `^6.2.0`;
* Updates [`case-sensitive-paths-webpack-plugin`](https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin) package from `2.3.0` fixed version to `^2.4.0`;
* Updates [`css-loader`](https://www.npmjs.com/package/css-loader) package from `3.4.2` fixed version to `^5.1.2`;
* Updates [`eslint`](https://www.npmjs.com/package/eslint) package from `^6.6.0` version to `^7.22.0`;
* Updates [`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app) package from `^5.2.1` version to `^6.0.0`;
* Updates [`eslint-loader`](https://www.npmjs.com/package/eslint-loader) package from `3.0.3` fixed version to `^4.0.2`;
* Updates [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) package from `2.20.1` fixed version to `^2.22.1;
* Updates [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) package from `6.2.3` fixed version to `^6.4.1`;
* Updates [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) package from `7.19.0` fixed version to `^7.22.0`;
* Updates [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) package from `^1.6.1` version to `^4.2.0`;
* Updates [`file-loader`](https://www.npmjs.com/package/file-loader) package from `4.3.0` fixed version to `^6.2.0`;
* Updates [`fs-extra`](https://www.npmjs.com/package/fs-extra) package from `^8.1.0` version to `^9.1.0`;
* Updates [`html-webpack-plugin`](https://www.npmjs.com/package/html-webpack-plugin) package from `4.0.0-beta.11` version to `^4.5.2`;
* Updates [`jest`](https://www.npmjs.com/package/jest) package from `24.9.0` fixed version to `^26.6.3`;
* Updates [`jest-resolve`](https://www.npmjs.com/package/jest-resolve) package from `24.9.0` fixed version to `^26.6.2`;
* Updates [`jest-watch-typeahead`](https://www.npmjs.com/package/jest-watch-typeahead) package from `0.4.2` fixed version to `^0.6.1`;
* Updates [`lodash`](https://www.npmjs.com/package/lodash) package from `4.17.19` fixed version to `^4.17.21`;
* Updates [`mini-css-extract-plugin`](https://www.npmjs.com/package/mini-css-extract-plugin) package from `0.9.0` fixed version to `^1.3.9`;
* Updates [`optimize-css-assets-webpack-plugin`](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin) package from `5.0.3` fixed version to `^5.0.4`;
* Updates [`react`](https://www.npmjs.com/package/react) package from `^16.13.1` version to `^17.0.1`;
* Updates [`react-app-polyfill`](https://www.npmjs.com/package/react-app-polyfill) package from `^1.0.6` version to `^2.0.0`;
* Updates [`react-dev-utils`](https://www.npmjs.com/package/react-dev-utils) package from `^10.2.1` version to `^11.0.4`;
* Updates [`react-dom`](https://www.npmjs.com/package/react-dom) package from `^16.13.1` version to `^17.0.1`;
* Updates [`resolve`](https://www.npmjs.com/package/resolve) package from `1.15.0` fixed version to `^1.20.0`;
* Updates [`resolve-url-loader`](https://www.npmjs.com/package/resolve-url-loader) package from `3.1.1` fixed version to `^3.1.2`;
* Updates [`semver`](https://www.npmjs.com/package/semver) package from `6.3.0` fixed version to `^7.3.4`;
* Updates [`style-loader`](https://www.npmjs.com/package/style-loader) package from `0.23.1` fixed version to `^2.0.0`;
* Updates [`ts-pnp`](https://www.npmjs.com/package/ts-pnp) package from `1.1.6` fixed version to `^1.2.0`;
* Updates [`webpack-dev-server`](https://www.npmjs.com/package/webpack-dev-server) package from `3.10.3` fixed version to `^3.11.2`;
* Updates [`enzyme-adapter-react-16`](https://www.npmjs.com/package/enzyme-adapter-react-16) package from `^1.15.4` version to `^1.15.5`;
* Updates [`url-loader`](https://www.npmjs.com/package/url-loader) package from `^4.1.0` version to `^4.1.1`;
* Adds lazy-loading for [`Scene`](https://github.com/corocoto/flappy-bird/compare/v1.1.1...v1.1.2#diff-f69facdad0112011223c6d48f25b7acc2ae87a03ead94a5b5dac7eb08dbb80acR7) and [`About`](https://github.com/corocoto/flappy-bird/compare/v1.1.1...v1.1.2#diff-f69facdad0112011223c6d48f25b7acc2ae87a03ead94a5b5dac7eb08dbb80acR12) components.

### Removed
* Removes [webpack settings for `.sass` and `.scss` file extensions](https://github.com/corocoto/flappy-bird/compare/v1.1.1...v1.1.2#diff-c49a22733230fd83e34ff3bc78014ee352ad46ce10c7c502dd2a7c3982adb0a5L454);
* Removes [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) package;
* Removes [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) package;
* Removes [`eslint-plugin-flowtype`](https://www.npmjs.com/package/eslint-plugin-flowtype) package;
* Removes [`sass-loader`](https://www.npmjs.com/package/sass-loader) package;
* Removes [`asyncComponent`](https://github.com/corocoto/flappy-bird/compare/v1.1.1...v1.1.2#diff-0783279c3f0fa613876cc3b1ec3061b118e7570d783358b904c89bcbfbd40888L3) HOC. Because it replaced by build in `Suspense` component and `React.lazy` function.

## 1.1.1 (5 September 2020)
### Added
* Adds [`test.yml` config](https://github.com/corocoto/flappy-bird/blob/eb8464395aa91a4781fa154bea75f4e296e8d586/.github/workflows/test.yml). It needs for running existing unit-tests on CI;
* Adds [`lodash`](https://lodash.com/) package to `dependencies` list;
* Add [`enzyme`](https://www.npmjs.com/package/enzyme) and [`enzyme-adapter-react-16`](https://www.npmjs.com/package/enzyme-adapter-react-16) packages to `devDependencies` list. 
* Writes [unit tests for `Menu` component](https://github.com/corocoto/flappy-bird/blob/eb8464395aa91a4781fa154bea75f4e296e8d586/src/containers/Menu/Menu.test.js)

### Changed
* Adds [`build` folder to the `.gitignore` list](https://github.com/corocoto/flappy-bird/blob/eb8464395aa91a4781fa154bea75f4e296e8d586/.gitignore#L7);
* Moves from `yarn` to `npm`;
* Sets [`--watchAll=false` flag for `test` script](https://github.com/corocoto/flappy-bird/blob/eb8464395aa91a4781fa154bea75f4e296e8d586/package.json#L86)

## 1.1.0 (17 June 2020)
### Changed
* Sets React stack for the project

