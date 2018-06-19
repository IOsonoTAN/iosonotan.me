import Main from '../layouts/main'
import axios from 'axios'

export default class Blog extends React.Component {
  static async getInitialProps(props) {
    const { pathname, query, asPath } = props

    const response = await axios.get('http://localhost:4000/blog')
    const contents = response.data

    return { pathname, query, asPath, contents }
  }

  render () {
    const { asPath, title, query, contents } = this.props

    const renderContents = contents.docs.map((content, key) => {
      const featurePicture = (content.featurePicture ? content.featurePicture : '/static/img/blog_default_picture.jpg')

      return <div key={key} className="col-sm-12 col-md-6 col-lg-4 margin-bottom-20">
        <div className="card">
          <img className="card-img-top" src={featurePicture} alt="feature picture" />
          <div className="card-body">
            <h5 className="card-title">{content.title}</h5>
            <p className="card-text" dangerouslySetInnerHTML={{ __html: content.detail }}></p>
            <a href="#" className="btn btn-primary">See more</a>
          </div>
        </div>
      </div>
    })

    return (
      <Main title={title}>
        <div className="container">
          <h1>Blog!</h1>
          <p>{asPath}</p>
          <div className="row">
            { renderContents }
          </div>
        </div>
      </Main>
    )
  }
}
