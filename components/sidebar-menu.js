import React from 'react'
import { push as Menu } from 'react-burger-menu'
import Navigator from './navigator'

const SidebarMenu = () => {
  return (
    <aside>
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <img src="/static/img/logo.png" alt="logo" style={{ width: '140px', margin: '0 auto' }} />
        <hr className="gray" />
        <Navigator />
      </Menu>
    </aside>
  )
}

export default SidebarMenu
