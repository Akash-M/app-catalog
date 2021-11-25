# lib-components

Frontend library of components. This is our custom component library for the app catalog
consisting of UI components without any business logic. We make use storybook to render the components to help with
rendering the component library.

[![lib-components](https://github.com/Akash-M/app-catalog/actions/workflows/lib-components-workflow.yaml/badge.svg)](https://github.com/Akash-M/app-catalog/actions/workflows/lib-components-workflow.yaml)

## How to write stories:

Each component has it's own `<component>.stories.tsx` file containing the corresponding storybook config
for the component with all the different states of the component included in it.
Whenever we write a new component, along with the `.tsx` and the `styles.scss` files we also need to include
`<component>.stories.tsx` file to incorporate the storybook configuration.

## Scripts

### Pre-requisites:

This project needs the version of `node` as specified in the respective package.json.

### Installation and setup:

#### Starting the app in dev mode:

The app will run on port 6000 by default as configured in the `start:dev` script.

```sh
yarn workspace lib-components start:dev
```

#### Running unit tests

The app is tested primarily through unit tests using [jest](https://jestjs.io/) and
[react-testing-library](https://testing-library.com/docs/react-testing-library/intro/).
Unit testing React components uses shallow approach. This helps in testing components in a detached manner independent
of the `ui-*` client apps.

Running unit tests in coverage mode:

```sh
yarn workspace lib-components test:unit
```

Coverage report is generated in `coverage` folder.

Running unit tests in watch mode during development:

```sh
yarn workspace lib-components test:unit:watch
```

#### Generating app distribution:

The app can be built using:

```sh
yarn workspace lib-components build
```

The build is generated in the `build` folder.

### HTML semantics and BEM usage

#### Approach

- `body`:
  - can have a single `header` or multiple headers
  - can container a single `nav` or multiple navs
  - should contain a single `aside` if required
  - should contain a single `footer`
- `section`:
  - can have multiple `articles` or `divs` etc.
  - should not contain another `section` inside
  - should not have a `footer`
- `article`:
  - should be a self-container unit. So we will no longer have sections inside articles
  - if there are any header components inside an article, it should be enclosed within the `header` tag and not divs span etc.
  - it can contain multiple `divs` `spans` etc.

#### Examples

```html
<section class="section-1">
  <article class="article-1">
    <header>...</header>
    <div class="article-1__header">...</div>
    ...
  </article>

  <article class="article-2">
    <header>...</header>
    <div class="article-2__header"></div>
    ...
  </article>

  <div class="div-1">
    <span class="div-1__span">...</div>
    ...
  </div>

  <button class="section-1__button"></button> --> Note: same with spans, p, etc.
</section>
```

### Linting

- The app is linted through custom `eslint` rules specified globally. Additionally, we make use
  of `prettier` and `stylelint` to automate as much as possible.

```sh
yarn workspace lib-components lint
```
