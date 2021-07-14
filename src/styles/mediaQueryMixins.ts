export const widthBreakpoints = {
  mobileXS: 375,
  mobileS: 576,
  mobile: 767,
  tablet: 1024,
  desktopXS: 1180,
  desktopRegular: 1366,
  desktopHD: 1920
}

export const viewportWidth = {
  higherThan: (breakpoint: number) => (
    `@media (min-width: calc(${breakpoint}px + 1px))`
  ),
  lowerThan: (breakpoint: number) => (
    `@media (max-width: ${breakpoint}px)`
  ),
  between: (breakpointMin: number, breakpointMax: number) => (
    `@media (max-width: ${breakpointMax}px) and (min-width: calc(${breakpointMin}px + 1px))`
  )
}

export const viewportHeight = {
  higherThan: (breakpoint: number) => (
    `@media (min-height: calc(${breakpoint} + 1px))`
  ),
  lowerThan: (breakpoint: number) => (
    `@media (max-height: ${breakpoint}px)`
  ),
  between: (breakpointMin: number, breakpointMax: number) => (
    `@media (max-height: ${breakpointMax})px and (min-height: calc(${breakpointMin}px + 1px))`
  )
}