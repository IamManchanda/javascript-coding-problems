export default {
  collectCoverage: true,
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/', '/__shared__/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/__shared__/'],
  coverageDirectory: './coverage',
};