module.exports = {
  setupTestFrameworkScriptFile: './__test__/setupTests.js',
  rootDir: 'src',
  testMatch: ['**/*.test.js'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../coverage',
  'snapshotSerializers': ['enzyme-to-json/serializer'],

  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/*.story.js',
    '!**/*.test.js'
  ],

  coverageReporters: ['lcov', 'text', 'text-summary'],

  moduleDirectories: [
    'node_modules',
    '<rootDir>'
  ],

  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },

  transform: {
    '^.+\\.js$': 'babel-jest'
  },

  moduleNameMapper: {
    '\\.(css|less|s(c|a)ss)$': '<rootDir>/../__mocks__/style.js',
    'services(.*)$': '<rootDir>/services$1'
  }
}
