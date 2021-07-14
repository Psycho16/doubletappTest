import 'styled-components'


type PaletteColor = {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

type TextColor = {
  primary: string;
  secondary: string;
  disabled: string;
  placeholder: string;
}

type BackgroundColor = {
  primary: string;
  secondary: string;
}

type ActionColor = {
  active: string;
  hover: string;
  disabled: string;
  contrastText: {
    default: string;
    disabled: string;
  }
}

type Palette = {
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  text: TextColor;
  background: BackgroundColor;
  action: ActionColor;
}

// extension for styled components theme
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    borderRadius: number;
    boxShadow: {
      common: string;
    }
  }
}