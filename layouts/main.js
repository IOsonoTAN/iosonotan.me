import Header from '../components/header'
import Footer from '../components/footer'
import SidebarMenu from '../components/sidebar-menu'

import "../assets/scss/style.scss"

const Main = (props) => {
  return (
    <div id="outer-container">
      <SidebarMenu />
      <div id="page-wrap">
        <Header title={props.title} />
        <div id="content">
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Main
