# lib-api

Library of api calls relevant for the app catalog display.

[![lib-api](https://github.com/Akash-M/app-catalog/actions/workflows/lib-api-workflow.yaml/badge.svg)](https://github.com/Akash-M/app-catalog/actions/workflows/lib-api-workflow.yaml)

### Testing philosophy

#### Unit tests

The app is tested primarily through unit tests using [jest](https://jestjs.io/).

```sh
yarn workspace lib-api test:unit
```

### Linting

```sh
yarn workspace lib-api lint
```

- The app is linted through custom `eslint` rules specified globally. Additionally, we make use
  of `prettier` to automate as much as possible.
