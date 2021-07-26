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

type StudentsFileds = {
  name: string;
  specialty: string;
  group: string;
  age: string;
  rating: string;
  marginW: string;
}

type StudentsTableSizes = {
  desktopHD: StudentsFileds;
  desktopRegular: StudentsFileds;
  desktopXS?: StudentsFileds;
  tablet: StudentsFileds;
  mobile: StudentsFileds;
  mobileS?: StudentsFileds;
  mobileXS?: StudentsFileds;
}

// extension for styled components theme
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    borderRadius: number;
    boxShadow: {
      common: string;
    }
    studentsTableSizes: StudentsTableSizes;
  }
}