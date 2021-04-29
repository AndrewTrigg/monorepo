const path = require('path')

module.exports = {
    webpack: (config) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
    //   console.log('-----------',__dirname)
        // config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules/react');
        // config.resolve.alias['react-dom'] = path.resolve(__dirname, 'node_modules/react-dom');
        // console.log('config', config)
        return config;

    },
  }