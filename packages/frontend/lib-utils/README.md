# lib-utils

Library of utility files relevant for the app catalog.

[![lib-utils](https://github.com/Akash-M/app-catalog/actions/workflows/lib-utils-workflow.yaml/badge.svg)](https://github.com/Akash-M/app-catalog/actions/workflows/lib-utils-workflow.yaml)

### Testing philosophy

#### Unit tests

The app is tested primarily through unit tests using [jest](https://jestjs.io/).

```sh
yarn workspace lib-utils test:unit
```

### Linting

```sh
yarn workspace lib-utils lint
```

- The app is linted through custom `eslint` rules specified globally. Additionally, we make use
  of `prettier` to automate as much as possible.
