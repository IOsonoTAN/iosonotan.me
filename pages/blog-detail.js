import { Link } from '../routes'
import Main from '../layouts/main'
import axios from 'axios'
import timeago from 'timeago.js'

export default class BlogDetail extends React.Component {
  static async getInitialProps(props) {
    const { query } = props
    const { objectId } = query

    const response = await axios.get(`http://localhost:4000/blog/${objectId}`)
    const content = response.data

    return { query, content }
  }

  render () {
    const { title, user, featurePicture, detail, createdAt, tag, category } = this.props.content
    const { displayName } = user

    const renderFeaturePicture = (!featurePicture ? 
      <div className="container margin-top-20">
        <h1>{ title }</h1>
        <hr />
      </div> :
      <div className="feature-picture" style={{ backgroundImage: `url('${featurePicture}')` }}>
        <div className="container-fluid">
          <div className="container">
            <h1>{ title }</h1>
          </div>
        </div>
      </div>
    )

    const renderTags = tag.map((keyword, key) => {
      return <Link key={key} route={`/blog/tag/${keyword}`}><a>{keyword}</a></Link>
    })

    return (
      <Main title={title}>
        <div id="blog-detail">
          { renderFeaturePicture }
          <div className="container">
            <div className="post-detail margin-top-20 margin-bottom-10">
              Content in <Link route={`/blog/tag/${category}`}><a>{category}</a></Link>, published by <Link route="/about-me"><a>{ user.displayName }</a></Link> at { timeago().format(createdAt) }
            </div>
            <div className="tag margin-bottom-20">{ renderTags }</div>
            <div className="content" dangerouslySetInnerHTML={{ __html: detail }}></div>
          </div>
        </div>
      </Main>
    )
  }
}
