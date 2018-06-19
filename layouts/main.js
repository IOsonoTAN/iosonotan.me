import Router from 'next/router'
import Header from '../components/header'
import Footer from '../components/footer'
import SidebarMenu from '../components/sidebar-menu'
import Loading from '../components/loading'

import "../assets/scss/style.scss"

class Main extends React.Component {
  constructor(props) {
    super(props)

    const showLoading = () => {
      const offsetTop = document.getElementsByTagName('html')[0].scrollTop

      document.getElementById('loading-text').style.top = `${offsetTop}px`
      document.getElementById('loading-text').style.visibility = 'visible'
      document.getElementsByTagName('body')[0].classList.add('lock')
    }
    const hideLoading = () => {
      document.getElementById('loading-text').style.top = '0px'
      document.getElementById('loading-text').style.visibility = 'hidden'
      document.getElementsByTagName('body')[0].classList.remove('lock')
    }

    Router.onRouteChangeStart = () => showLoading()
    Router.onRouteChangeComplete = () => hideLoading()
    Router.onRouteChangeError = () => hideLoading()
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
