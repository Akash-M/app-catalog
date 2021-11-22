// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const rootDir = path.resolve(__dirname);
const base = require('../../../jest.config');

module.exports = Object.assign({}, base, {
  rootDir,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx'],
});
