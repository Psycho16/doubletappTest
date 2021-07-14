import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/consts/appTheme'

addDecorator(storyFn => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
