import React from 'react'
import axios from 'axios'
import TagsInput from 'react-tagsinput'
import { Link } from '../routes'
import Main from '../layouts/main'
import TextEditor from '../components/TextEditor'
import TextGroup from '../components/TextGroup'
import SelectGroup from '../components/SelectGroup'

export default class CmsEdit extends React.Component {
  static async getInitialProps ({ query }) {
    const { BACKEND_URL } = process.env
    const { data: content } = await axios.get(`${BACKEND_URL}/blog/${query.objectId}`)

    return { content }
  }

  constructor (props) {
    super(props)

    this.state = {
      content: props.content,
      categoryOptions: [{
        value: 'uncategory',
        label: 'Uncategory'
      }, {
        value: 'bnk48',
        label: 'BNK48'
      }, {
        value: 'technology',
        label: 'Technology'
      }, {
        value: 'travel',
        label: 'Travel'
      }, {
        value: 'life-style',
        label: 'Life Style'
      }]
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

  handleDetail = (detail) => {
    this.setState({
      content: {
        ...this.state.content,
        detail
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
              <TextGroup
                name="title"
                label="Content title"
                placeholder="please enter title"
                wrapperClasses="col-md-7"
                handleChange={this.handleInput}
                value={content.title}
              />
              <SelectGroup
                name="category"
                label="Content category"
                wrapperClasses="col-md-5"
                handleChange={this.handleInput}
                value={content.category}
                selectOptions={this.state.categoryOptions}
              />
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <TagsInput value={content.tag} onChange={this.handleTag} />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="detail">Detail</label>
                <TextEditor detail={content.detail} handleDetail={this.handleDetail} />
              </div>
            </div>
          </form>
        </div>
      </Main>
    )
  }
}
