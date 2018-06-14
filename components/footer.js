import { Link } from '../routes'

const Footer = (props) => {
  return (
    <footer className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Quick links</h4>
            <ul className="menus">
              <li><Link route='/'><a>Homepage</a></Link></li>
              <li><Link route='/blog'><a>Blog</a></Link></li>
              <li><Link route='/contact-me'><a>Contact Me</a></Link></li>
              <li className="divider"></li>
              <li><a href="https://traova.com" target="_blank">Traova Co., Ltd.</a></li>
            </ul>
          </div>
          <div className="col-md-9">
            <h4>Reach me</h4>
            <ul className="menus">
              <li><a href="https://github.com/IOsonoTAN" target="_blank">Github</a></li>
              <li><a href="https://fb.com/IOsonoTAN" target="_blank">Facebook</a></li>
              <li><a href="https://twitter.com/IOsonoTAN" target="_blank">Twitter</a></li>
              <li><a href="https://instagram.com/IOsonoTAN" target="_blank">Instagram</a></li>
              <li><a href="https://linkedin.com/in/krissada-boontrigratn" target="_blank">LinkedIn</a></li>
              <li><a href="https://shutterstock.com/g/iosonotan" target="_blank">Shutter Stock</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
