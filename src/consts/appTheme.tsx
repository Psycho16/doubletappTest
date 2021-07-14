import { DefaultTheme } from 'styled-components'


export const defaultTheme: DefaultTheme = {
  palette: {
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f'
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162'
    },
    error: {
      main: '#E25B5B'
    },
    warning: {
      main: '#ff9800'
    },
    info: {
      main: '#2196f3'
    },
    success: {
      main: '#4caf50'
    },
    action: {
      active: '#49C2E8',
      hover: '#9bd2e2',
      disabled: 'rgba(0, 0, 0, 0.1)',
      contrastText: {
        default: '#ffffff',
        disabled: '#ffffff'
      }
    },
    text: {
      primary: '#000000',
      secondary: '#121212',
      disabled: '#424242',
      placeholder: 'rgba(0,0,0,.3)'
    },
    background: {
      primary: '#ffffff',
      secondary: '#ebebeb'
    }
  },
  borderRadius: 5,
  boxShadow: {
    common: '0px 7px 64px rgba(0, 0, 0, 0.07);'
  }
}