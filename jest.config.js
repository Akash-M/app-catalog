const path = require('path');

module.exports = {
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: process.env.GITHUB_ACTIONS
    ? ['lcovonly', 'text']
    : ['html', 'lcov', 'text'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleFileExtensions: ['json', 'ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/test/**/*.spec.ts'],
  transform: {
    '^.+\\.tsx?$': require.resolve('ts-jest'),
    '\\.(css|scss|svg|png|jpg)$': path.join(__dirname, 'jest.transform.assets'),
  },
  transformIgnorePatterns: ['/.pnp.cjs$'],
  verbose: true,
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  testEnvironment: 'jsdom',
};
