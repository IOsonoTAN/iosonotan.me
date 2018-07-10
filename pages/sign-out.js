import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { logout } from '../store'

class SignOut extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(logout())

    Router.push('/')
  }

  render () {
    return ''
  }
}

export default connect(state => state)(SignOut)
