module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: require.resolve('./lib/api.js'),
        use: [{ loader: 'val-loader' }]
      }
    )
    return config
  }
}
