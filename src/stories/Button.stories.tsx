import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '@components/ui/Button'



export default {
  title: 'Example/Buttons',
  component: Button
} as Meta

export const Buttons: Story<ButtonProps> = args => <Button {...args} />
Buttons.args = {
  text: 'Title',
  onClick: e => e
}
