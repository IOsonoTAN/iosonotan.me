import React from 'react'
import Head from 'next/head'
import Navigator from './Navigator'
import { Link } from '../routes'

const Header = (props) => {
  return (
    <div>
      <Head>
        <title>{ (props.title ? `${props.title} - ` : '') }IOsonoTAN</title>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link route='/'><a className="navbar-brand"><img src="/static/img/logo.png" height={30} /></a></Link>
          <Navigator />
        </div>
      </nav>
    </div>
  )
}

export default Header
