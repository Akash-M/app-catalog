// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const rootDir = path.resolve(__dirname);

// TODO: use base jest.config.
module.exports = {
  rootDir,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/i18n.ts', '!src/testing/**'],
  coverageReporters: ['lcov', 'text'],
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  testEnvironment: 'jsdom',
  testMatch: ['**/**/test/**/*.spec.ts?(x)'],
  transform: {
    '^.+\\.tsx?$': require.resolve('ts-jest'),
  },
};
