import Main from '../layouts/main'

export default class Blog extends React.Component {
  static async getInitialProps(props) {
    const { pathname, query, asPath } = props
    const { slug: title } = query

    return { pathname, query, asPath, title }
  }

  render () {
    const { asPath, title, query } = this.props

    return (
      <Main title={title}>
        <div className="container">
          <h1>Blog!</h1>
          <p>{asPath}</p>
        </div>
      </Main>
    )
  }
}
