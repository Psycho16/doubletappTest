import React, { FC } from 'react'
import { maskArray } from 'react-text-mask'

import * as SC from './styled'


export interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  placeholder?: string;
  error?: string;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  mask?: maskArray | ((value: string) => maskArray);
  guide?: boolean;
  disabled?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  type?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  pipe?: (conformedValue: string, config: unknown) => string | false | {
    value: string;
    indexesOfPipedChars: number[];
  };
  autoComplete?: string;
  hasPrefixIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; 
}

const InputComponent: FC<InputProps> = (props) => {
  const {
    onChange,
    name,
    value,
    placeholder,
    error,
    onBlur,
    mask,
    guide,
    disabled,
    onFocus,
    type,
    icon,
    pipe,
    autoComplete,
    hasPrefixIcon
  } = props

  return (
    <SC.Base>
      <SC.InputBlock
        error={error}
        icon={icon}
        disabled={disabled}
        hasPrefixIcon={hasPrefixIcon}
      >
      {hasPrefixIcon && <SC.PrefixIconWrapper >{React.createElement(hasPrefixIcon)}</SC.PrefixIconWrapper>}
        <SC.Input 
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          mask={mask}
          guide={guide}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          type={type || 'text'}
          pipe={pipe}
          autoComplete={autoComplete}
        />
      </SC.InputBlock>
      {error && (
        <SC.Error>
          {error}
        </SC.Error>
      )}
    </SC.Base>
  )
}

export default InputComponent