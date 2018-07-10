import React from 'react'
import { connect } from 'react-redux'
import { Link } from '../routes'
import Navigator from './Navigator'

const Footer = ({ user }) => {
  const buttnSignInOrSignOut = (user && user.token ? <Link route='/sign-out'><a>Sign-out</a></Link> : <Link route='/sign-in'><a>back office sign-in</a></Link>)

  return (
    <footer className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 order-2 order-md-1">
            <h4>Quick links</h4>
            <Navigator />
            <ul className="menus">
              <li className="divider"></li>
              <li><Link route='/resume'><a>resume</a></Link></li>
              <li>{ buttnSignInOrSignOut }</li>
            </ul>
          </div>
          <div className="col-md-8 order-1 order-md-2">
            <h4>Reach me</h4>
            <ul className="menus">
              <li><a href="https://github.com/IOsonoTAN" target="_blank">Github</a></li>
              <li><a href="https://fb.com/IOsonoTAN" target="_blank">Facebook</a></li>
              <li><a href="https://twitter.com/IOsonoTAN" target="_blank">Twitter</a></li>
              <li><a href="https://instagram.com/IOsonoTAN" target="_blank">Instagram</a></li>
              <li><a href="https://linkedin.com/in/krissada-boontrigratn" target="_blank">LinkedIn</a></li>
              <li><a href="https://www.youtube.com/channel/UCMQryl1CZjxDFz451-Ra78g" target="_blank">Youtube Channel</a></li>
              <li><a href="https://shutterstock.com/g/iosonotan" target="_blank">Shutter Stock</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default connect(state => state)(Footer)
