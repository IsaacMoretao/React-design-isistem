import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Login } from './Login';
import { rest } from 'msw';

export default {
  title: 'Components/Login',
  component: Login,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) =>{
          return res(ctx.json({
            message: 'login realizado'
          }))
        })
      ],
    },
  }

} as Meta

export const Default: StoryObj  = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'isaachanam@gmail.com')
    userEvent.type(canvas.getByPlaceholderText('*********'), '12345678')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {

      expect(canvas.getByText('Login Realizado')).toBeInTheDocument()

    })

  }
}