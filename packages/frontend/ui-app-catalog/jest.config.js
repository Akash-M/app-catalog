// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const rootDir = path.resolve(__dirname);
const base = require('../../../jest.config');

module.exports = Object.assign({}, base, {
  rootDir,
  transform: {
    ...base.transform,
    '\\.yaml$': path.join(__dirname, 'jest.transform.yaml'),
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx'],
});
