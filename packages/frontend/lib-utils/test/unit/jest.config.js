// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = Object.assign({}, require('../../jest.config.js'), {
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 95,
      lines: 98,
      functions: 95,
    },
  },
});
