// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = Object.assign({}, require('../../jest.config'), {
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 97,
      functions: 100,
      lines: 100,
    },
  },
});
