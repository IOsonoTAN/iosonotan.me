import React from 'react'
import { Link, Router } from '../routes'

export default class Navigator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [{
        url: '/about-me',
        label: 'about me',
        isActive: false
      }, {
        url: '/blog',
        label: 'blog',
        isActive: false
      }, {
        url: '/contact-me',
        label: 'contact me',
        isActive: false
      }]
    }
  }

  componentDidMount() {
    const menus = this.state.menus

    menus.map((value, key) => {
      const result = Router.route.match(new RegExp(value.url, 'g'))
      if (result) {
        value.isActive = true
      }
      return {
        ...value
      }
    })

    this.setState({
      menus
    })
  }

  render () {
    const renderMenuItem = this.state.menus.map((menu, key) => {
      return <li key={key} className={menu.isActive ? 'active' : ''}><Link route={menu.url}><a>{menu.label}</a></Link></li>
    })

    return (
      <ul className="menus">
        { renderMenuItem }
      </ul>
    )
  }
}
