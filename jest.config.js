module.exports = {
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
      "^[^.]+.vue$": "vue-jest",
      "^.+\\.js$": "babel-jest"
    }
}