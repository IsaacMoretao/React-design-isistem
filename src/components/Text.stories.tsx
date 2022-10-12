import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'sm'
  },
} as Meta

export const Default: StoryObj  = {

}

export const Small: StoryObj  = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj  = {
  args: {
    size: 'lg'
  }

}