import React from 'react'
import Router from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SidebarMenu from '../components/SidebarMenu'
import Loading from '../components/Loading'
import isLoading from '../lib/loading'

import "../assets/scss/style.scss"

class Main extends React.Component {
  constructor(props) {
    super(props)

    Router.onRouteChangeStart = () => isLoading(true)
    Router.onRouteChangeComplete = () => isLoading(false)
    Router.onRouteChangeError = () => isLoading(false)
  }

  render () {
    return (
      <div id="outer-container">
        <SidebarMenu />
        <div id="page-wrap">
          <Header title={this.props.title} />
          <div id="content">
            {this.props.children}
          </div>
          <Footer />
        </div>
        <Loading />
      </div>
    )
  }
}

export default Main
