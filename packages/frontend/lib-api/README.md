# lib-api

Library of api calls relevant for the app catalog display.

// TODO: setup github actions badge

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

- The app is tested through standard `eslint` packages with rules specific for a typescript project.
