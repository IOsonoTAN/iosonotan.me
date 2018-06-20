import { Link } from '../routes'
import Main from '../layouts/main'
import ErrorPage from '../layouts/error'
import axios from 'axios'
import Paginate from '../components/paginate'
export default class Blog extends React.Component {
  static async getInitialProps (props) {
    const { query } = props
    const page = query.page || 1

    try {
      const response = await axios.get(`http://localhost:4000/blog?page=${page}`)
      const contents = response.data

      return { query, page, contents }
    } catch (err) {
      return { err: err.response.data.error }
    }
  }

  render () {
    let title = 'Blog'
    const { contents, page, err } = this.props

    if (err) {
      return <ErrorPage message={err.message} code={err.code} />
    }

    const renderContents = (contents.docs.length > 0 ?
      contents.docs.map((content, key) => {
        const featurePicture = (content.featurePicture ? content.featurePicture : '/static/img/blog_default_picture.jpg')

        return <div key={key} className="col-sm-12 col-md-6 col-lg-4 margin-bottom-20">
          <div className="card">
            <img className="card-img-top" src={featurePicture} alt="feature picture" />
            <div className="card-body">
              <h5 className="card-title">{content.title}</h5>
              <p className="card-text" dangerouslySetInnerHTML={{ __html: content.detail }}></p>
              <Link route={`/blog/${content._id}`}><a className="btn btn-primary btn-block">See more</a></Link>
            </div>
          </div>
        </div>
      }) :
      <div className="col-sm-12 col-md-6 col-lg-4 margin-bottom-20">
        <p>There is no any content on this conditions.</p>
      </div>
    )

    return (
      <Main title={title}>
        <div className="container margin-top-20">
          <h1>Blog</h1>
          <hr />
          <Paginate url={'blog'} page={page} pages={contents.pages} />
          <div id="blog" className="row">
            {renderContents}
          </div>
          <Paginate url={'blog'} page={page} pages={contents.pages} />
        </div>
      </Main>
    )
  }
}
