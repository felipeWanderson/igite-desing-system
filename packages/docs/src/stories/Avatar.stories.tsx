import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@felipeignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/felipeWanderson.png',
    alt: 'Felipe Leal',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}