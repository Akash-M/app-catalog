// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = Object.assign({}, require('../../jest.config'), {
  coverageThreshold: {
    global: {
      statements: 93,
      branches: 85,
      functions: 88,
      lines: 94,
    },
  },
});
