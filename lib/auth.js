import Router from 'next/router'

export const isLoggedIn = ({ user, asPath }) => {
  if (!user) {
    Router.push(`/sign-in?redirect=${asPath}`)
  }
}
