import Router from 'Router'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@consts/appTheme'

import { RootStoreProvider } from '@context/rootStore.context'


function App(): JSX.Element {
  return (
    <RootStoreProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
    </RootStoreProvider>
  )
}

export default App