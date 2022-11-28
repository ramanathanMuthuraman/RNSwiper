module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', './index.js'],
  setupFiles: ['./jestSetup.js'],
  setupFilesAfterEnv: ['<rootDir>/test.setup.js', 'jest-extended/all'],
};
