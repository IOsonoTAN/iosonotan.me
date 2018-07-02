import React from 'react'
import axios from 'axios'
import TagsInput from 'react-tagsinput'
import { Link } from '../routes'
import Main from '../layouts/main'

export default class CmsEdit extends React.Component {
  static async getInitialProps ({ query }) {
    const { BACKEND_URL } = process.env
    const { data: content } = await axios.get(`${BACKEND_URL}/blog/${query.objectId}`)

    return { content }
  }

  constructor (props) {
    super(props)

    this.state = {
      content: props.content
    }
  }

  handleInput = (e) => {
    this.setState({
      content: {
        ...this.state.content,
        [e.target.name]: e.target.value
      }
    })
  }

  handleTag = (tag) => {
    this.setState({
      content: {
        ...this.state.content,
        tag
      }
    })
  }

  render () {
    const { content } = this.state

    return (
      <Main title={content.title}>
        <div className="container margin-top-20">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link route="/cms"><a href="/cms">All Content</a></Link></li>
              <li className="breadcrumb-item active" aria-current="page">{content.title}</li>
            </ol>
          </nav>

          <h1>{content.title}</h1>
          <form>
            <div className="row">
              <div className="form-group col-md-7">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" name="title" placeholder="Title" value={content.title} onChange={this.handleInput} />
              </div>
              <div className="form-group col-md-5">
                <label htmlFor="category">Category</label>
                <select className="form-control" name="category" value={content.category} onChange={this.handleInput}>
                  <option value="uncategory">Uncategory</option>
                  <option value="bnk48">BNK48</option>
                  <option value="tech">Technology</option>
                  <option value="travel">Travel</option>
                  <option value="life-style">Life Style</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <TagsInput value={content.tag} onChange={this.handleTag} />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="detail">detail</label>
                <textarea className="form-control" id="detail" rows="8" defaultValue={content.detail}></textarea>
              </div>
            </div>
            {}
          </form>
        </div>
      </Main>
    )
  }
}
