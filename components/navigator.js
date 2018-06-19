import { Link } from '../routes'

const Navigator = () => {
  return (
    <ul className="menus">
      <li><Link route='/about-me'><a>about me</a></Link></li>
      <li><Link route='/blog'><a>blog</a></Link></li>
      <li><Link route='/contact-me'><a>contact me</a></Link></li>
    </ul>
  )
}

export default Navigator
