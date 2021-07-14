const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  webpackFinal: async config => {
    config.resolve.alias['@styles'] = path.resolve(__dirname, '..', 'src', 'styles')
    config.resolve.alias['@assets'] = path.resolve(__dirname, '..', 'src', 'assets')
    config.resolve.alias['@components'] = path.resolve(__dirname, '..', 'src', 'components')
    config.resolve.alias['@consts'] = path.resolve(__dirname, '..', 'src', 'consts')
    config.resolve.alias['@containers'] = path.resolve(__dirname, '..', 'src', 'containers')
    config.resolve.alias['@context'] = path.resolve(__dirname, '..', 'src', 'context')
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '..', 'src', 'hooks')
    config.resolve.alias['@models'] = path.resolve(__dirname, '..', 'src', 'models')
    config.resolve.alias['@pages'] = path.resolve(__dirname, '..', 'src', 'pages')
    config.resolve.alias['@services'] = path.resolve(__dirname, '..', 'src', 'services')
    config.resolve.alias['@stores'] = path.resolve(__dirname, '..', 'src', 'stores')
    config.resolve.alias['@utils'] = path.resolve(__dirname, '..', 'src', 'utils')
    config.resolve.alias['@config'] = path.resolve(__dirname, '..', 'src', 'config')
    return config
  }
}
