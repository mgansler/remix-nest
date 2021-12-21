module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
  },
  testRegex: '.*\\.spec\\.tsx?$',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
}
