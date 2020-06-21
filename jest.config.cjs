const configs = require("@snowcoders/renovate-config");

module.exports = {
    ...configs.jest,
    moduleNameMapper: {
        '\\.(scss)$': '<rootDir>/mocks/style-mock.js'
    }
};
