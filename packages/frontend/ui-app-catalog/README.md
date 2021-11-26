# ui-app-catalog

Catalog app written using React 17 with hooks and Typescript.

[![ui-app-catalog](https://github.com/Akash-M/app-catalog/actions/workflows/ui-app-catalog-workflow.yaml/badge.svg)](https://github.com/Akash-M/app-catalog/actions/workflows/ui-app-catalog-workflow.yaml)

## Scripts

### Pre-requisites:

This project needs the version of `node` as specified in the respective package.json.

### Installation and setup:

#### Starting the app in dev mode:

The app will run on port 9000 by default as configured in the `start:dev` script.

```sh
yarn workspace ui-app-catalog start
```

The app is based on React 17 using hooks based approach.

#### Running unit tests

The app is tested primarily through unit tests using [jest](https://jestjs.io/) and
[react-testing-library](https://testing-library.com/docs/react-testing-library/intro/). Unit testing React components
uses integrated approach. This helps with ensuring that we can test the components from top down including all the
relevant child components in their entirety.

Running unit tests in coverage mode:

```sh
yarn workspace ui-app-catalog test:unit
```

Coverage report is generated in `coverage` folder.

Running unit tests in watch mode during development:

```sh
yarn workspace ui-app-catalog test:unit:watch
```

#### Generating app distribution:

The app can be built using:

```sh
yarn workspace ui-app-catalog build
```

The build is generated in the `build` folder.

### Linting

- The app is linted through custom `eslint` rules specified globally. Additionally, we make use of `prettier`
  and `stylelint` to automate as much as possible.

```sh
yarn workspace ui-app-catalog lint
```

### Analyzing bundle:

- To analyze the build generated, run

```sh
yarn workspace ui-app-catalog build:gen-stats
```

And then run the visualizer:

```sh
yarn workspace ui-app-catalog start:webpack-analyzer
```
