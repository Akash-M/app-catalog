// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = Object.assign({}, require('../../jest.config'), {
  coverageThreshold: {
    global: {
      statements: 88,
      branches: 72,
      functions: 81,
      lines: 88,
    },
  },
});
