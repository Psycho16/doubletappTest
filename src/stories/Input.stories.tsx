import React from 'react'
import { Story, Meta } from '@storybook/react'

import Input, { InputProps } from '@components/ui/Input'



export default {
  title: 'Example/Inputs',
  component: Input
} as Meta

let value = ''

export const Inputs: Story<InputProps> = args => <Input {...args} mask={false} />
Inputs.args = {
  onChange: e => value = e.target.value,
  value,
  placeholder: "Placeholder",
  error: ''
}
