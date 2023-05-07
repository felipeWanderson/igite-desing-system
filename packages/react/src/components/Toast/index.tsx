import * as ToastRadix from '@radix-ui/react-toast'
import { Text } from '../Text'
import { ToastClose, ToastContent, ToastRoot, ToastViewport } from './styles'
import { colors } from '@felipeignite-ui/tokens'
import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
  swipeDirection?: 'right' | 'left' | 'up' | 'down'
}

export function Toast(props: ToastProps) {
  const { description = '', title = '', swipeDirection = 'right' } = props
  return (
    <ToastRadix.Provider swipeDirection={swipeDirection}>
      <ToastRoot {...props}>
        <ToastContent>
          <ToastRadix.Title asChild>
            <Text as="strong">{title}</Text>
          </ToastRadix.Title>
          <ToastRadix.Description asChild>
            <Text as="span" size="xs">
              {description}
            </Text>
          </ToastRadix.Description>
        </ToastContent>

        <ToastClose aria-label="Close">
          <X size={20} color={colors?.gray200} />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
