import { Link } from '../routes'

const Navigator = () => {
  return (
    <div className="menus">
      <Link route='/blog'><a>blog</a></Link>
      <Link route='/resume'><a>resume</a></Link>
      <Link route='/contact-me'><a>contact me</a></Link>
    </div>
  )
}

export default Navigator
