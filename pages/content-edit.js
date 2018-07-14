import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import TagsInput from 'react-tagsinput'
import { Link } from '../routes'
import Main from '../layouts/main'
import TextEditor from '../components/TextEditor'
import TextGroup from '../components/TextGroup'
import SelectGroup from '../components/SelectGroup'
import { isLoggedIn } from '../lib/auth'

const { BACKEND_URL } = process.env

class ContentAddAndEdit extends React.Component {
  static async getInitialProps({ query, asPath }) {
    if (query.objectId) {
      const { data: content } = await axios.get(`${BACKEND_URL}/blog/${query.objectId}`)
      return { content, asPath }
    }
    return { asPath }
  }

  constructor (props) {
    super(props)

    const defaultContent = {
      title: '',
      detail: '',
      tag: [],
      category: 'uncategory'
    }

    this.state = {
      content: (props.content ? props.content : defaultContent),
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

  componentDidMount = async () => {
    isLoggedIn(this.props)
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

  handleDetail = (e) => {
    const detail = e.editor.getData()

    this.setState({
      content: {
        ...this.state.content,
        detail
      }
    })
  }

  submitForm = async (e) => {
    e.preventDefault()
    try {
      const token = this.props.user.token
      const { data: content } = await axios.put(`${BACKEND_URL}/blog`, {
        ...this.state.content
      }, {
        headers: {
          'access-token': token
        }
      })
      console.log('content ->', content)
      window.alert('Content has been updated.')
    } catch (e) {
      console.error('e ->', e)
      window.alert('Something went wrong!')
    }
  }

  render () {
    const { content } = this.state

    return (
      <Main title={content.title}>
        <div className="container margin-top-20">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link route="/content"><a href="/content">All Content</a></Link></li>
              <li className="breadcrumb-item active" aria-current="page">{content.title}</li>
            </ol>
          </nav>

          <h1>{content.title}</h1>
          <form onSubmit={ this.submitForm }>
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
                <TextEditor detail={content.detail} handleDetail={this.handleDetail} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </Main>
    )
  }
}

export default connect(state => state)(ContentAddAndEdit)
