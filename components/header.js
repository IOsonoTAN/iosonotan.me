import Head from 'next/head'
import Navigator from '../components/navigator'
import { Link } from '../routes'

const Header = (props) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <title>{ (props.title ? `${props.title} - ` : '') }IOsonoTAN.me</title>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link route='/'><a className="navbar-brand"><img src="/static/img/logo.png" height={30} /></a></Link>
          <Navigator />
        </div>
      </nav>
    </div>
  )
}

export default Header
