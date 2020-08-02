module.exports = {
  roots: ['<rootDir>'],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: [
    './node_modules/',
    './build/',
  ],
  coverageReporters: ['html', 'lcov', 'text-summary'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  testPathIgnorePatterns: ['./build/', './node_modules/'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
