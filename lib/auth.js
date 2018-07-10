import Router from 'next/router'
import axios from 'axios'

export const isLoggedIn = async ({ user, asPath }) => {
  const redirectURL = `/sign-in?redirect=${asPath}`

  if (!user) {
    Router.push(redirectURL)
  }

  const { token } = user
  const { BACKEND_URL } = process.env

  const response = await axios.post(`${BACKEND_URL}/verify-token`, {
    token
  })
  const { isExpired } = response.data

  if (isExpired) {
    Router.push(redirectURL)
  }
}
