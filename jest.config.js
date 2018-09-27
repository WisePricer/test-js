const { resolve } = require('path')

const local = path => resolve(__dirname, 'lib', path)

module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  testRegex: '.test.js$',
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['**/*.{js}', '!**/*.test.{js}'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': local('componentMock.js'),
    '\\.(eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': local('fileMock.js'),
    '\\.(css|less|scss)$': local('styleMock.js')
  },
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16'
  },
  timers: 'fake'
}
