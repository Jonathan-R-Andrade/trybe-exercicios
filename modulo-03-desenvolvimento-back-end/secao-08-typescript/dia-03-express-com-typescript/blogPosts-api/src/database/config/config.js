require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DB_URL_DEVELOPMENT'
  },
  test: {
    use_env_variable: 'DB_URL_TEST'
  },
  production: {
    use_env_variable: 'DB_URL_PRODUCTION'
  }
}
