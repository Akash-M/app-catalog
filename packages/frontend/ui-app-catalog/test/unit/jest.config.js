// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = Object.assign({}, require('../../jest.config'), {
  coverageThreshold: {
    global: {
      statements: 91,
      branches: 72,
      functions: 84,
      lines: 91,
    },
  },
});
