import React from 'react'
import Router from 'next/router'
import Header from '../components/header'
import Footer from '../components/footer'
import SidebarMenu from '../components/sidebar-menu'
import Loading from '../components/loading'
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
