import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@felipeignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    open: true,
    title: 'Agendamento Realizado',
    description: 'Quarta-feira, 23 de Outubro ás 16h',
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
