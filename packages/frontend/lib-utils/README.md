# lib-utils

Library of utility files relevant for the app catalog.

// TODO: setup github actions badge

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
