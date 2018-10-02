import Router from 'next/router'
import axios from 'axios'
import config from '../config'

export const isLoggedIn = async ({ user, asPath }) => {
  const redirectURL = `/sign-in?redirect=${asPath}`

  if (!user) {
    Router.push(redirectURL)
  }

  const { token } = user

  const response = await axios.post(`${config.backendUrl}/verify-token`, {
    token
  })
  const { isExpired } = response.data

  if (isExpired) {
    Router.push(redirectURL)
  }
}
