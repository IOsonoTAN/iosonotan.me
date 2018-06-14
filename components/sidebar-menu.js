import { push as Menu } from 'react-burger-menu'
import Navigator from './navigator'

const SidebarMenu = (props) => {
  return (
    <aside>
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <Navigator />
      </Menu>
    </aside>
  )
}

export default SidebarMenu
