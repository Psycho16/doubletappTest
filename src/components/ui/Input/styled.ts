import MaskedInput from 'react-text-mask'
import styled, { css } from 'styled-components/macro'


export const Base = styled.div``

type InputBlockProps = {
  error?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
}

type ErrorProps = {
  isStatic?: boolean;
}

export const InputBlock = styled.div<InputBlockProps>`
  display: flex;
  align-items: center;
  height: 48px;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 6px;
  box-shadow: ${props => props.theme.boxShadow.common};
  overflow: hidden;
  
  ${props => props.error && css`
    border: 1px solid ${props.theme.palette.error.main};

    ${Input} {
      color: ${props => props.theme.palette.error.main};
    }
  `}
`

export const Icon = styled.div`
  margin-right: 10px;
  flex-shrink: 0;
  line-height: 0;
  width: 30px;
  height: 30px;

  svg {
    max-width: 100%;
    max-height: 100%;
  }
`

export const Input = styled(MaskedInput)`
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  background: transparent;
  width: 100%;
  height: 100%;
  padding: 0 20px 0 44px;
  color: ${props => props.theme.palette.text.primary};
  box-sizing: border-box;
  &::placeholder {
    color: ${props => props.theme.palette.text.placeholder};
  }
`

export const Error = styled.div<ErrorProps>`
  color: ${props => props.theme.palette.error.main};
  font-size: 12px;
  margin-top: 12px;
`