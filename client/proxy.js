module.exports = {
  backend: {
    '/web': {
      target: 'http://localhost:9090',
      changeOrigin: true,
      secure: false
    }
  }
}
