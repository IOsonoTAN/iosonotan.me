import React from 'react'
import querystring from 'querystring'
import axios from 'axios'
import { Link } from '../routes'
import Main from '../layouts/main'
import ErrorPage from '../layouts/error'
import Paginate from '../components/paginate'
import { axiosResponseError } from '../lib/handle-error'

const generateCurrentUrl = ({ category, tag }) => {
  if (category) {
    return `blog/category/${category}`
  } else if (tag) {
    return `blog/tag/${tag}`
  }

  return 'blog'
}

export default class Blog extends React.Component {
  static async getInitialProps({ query }) {
    const { BACKEND_URL } = process.env
    const page = query.page || 1
    const category = query.category
    const tag = query.tag
    const requestQuerystring = querystring.stringify({
      page,
      category,
      tag
    })
    const currentUrl = generateCurrentUrl({ category, tag })

    try {
      const response = await axios.get(`${BACKEND_URL}/blog?${requestQuerystring}`)
      const contents = response.data

      return { contents, page, currentUrl, category, tag }
    } catch (err) {
      return axiosResponseError(err)
    }
  }

  generateTitle(category) {
    if (category) {
      return `Blog in ${category}`
    }

    return 'Blog'
  }

  generateClearFilterButton({ category, tag }) {
    const filter = []

    if (category) {
      filter.push(category)
    }
    if (tag) {
      filter.push(tag)
    }

    if (filter.length >= 1) {
      return (
        <div className="margin-bottom-15">
          <Link route="/blog">
            <button type="button" className="btn btn-light">
              Clear filters: <span className="badge badge-secondary" dangerouslySetInnerHTML={{ __html: filter.join('') }}></span>
            </button>
          </Link>
        </div>
      )
    }

    return ''
  }

  render () {
    const { contents, page, currentUrl, category, tag, err } = this.props
    const title = this.generateTitle(category)

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
        <p>There is no any content right now.</p>
      </div>
    )

    return (
      <Main title={title}>
        <div className="container margin-top-20">
          <h1>{title}</h1>
          <hr />
          { this.generateClearFilterButton({ category, tag }) }
          <Paginate url={currentUrl} page={page} pages={contents.pages} />
          <div id="blog" className="row">
            {renderContents}
          </div>
          <Paginate url={currentUrl} page={page} pages={contents.pages} />
        </div>
      </Main>
    )
  }
}
