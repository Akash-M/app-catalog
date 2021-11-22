
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const rootDir = path.resolve(__dirname);

module.exports = Object.assign({}, require('../jest.config'), {
  rootDir,
  setupFiles: ['<rootDir>/jest.setup.ts'],
});
