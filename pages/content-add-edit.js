import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import TagsInput from 'react-tagsinput'
import { Link } from '../routes'
import Main from '../layouts/main'
import { isLoggedIn } from '../lib/auth'
import { TextEditor, TextGroup, SelectGroup, CloudinaryFinder } from '../components'
import config from '../config'

class ContentAddAndEdit extends React.Component {
  static async getInitialProps({ query, asPath }) {
    const isNew = (query.objectId === undefined)
    if (query.objectId) {
      const { data: content } = await axios.get(`${config.backendUrl}/blog/${query.objectId}`)
      return { content, asPath }
    }
    return { asPath, isNew }
  }

  constructor (props) {
    super(props)

    const { isNew } = props
    const initContent = {
      isNew,
      title: '',
      detail: '',
      tag: [],
      category: 'uncategory'
    }

    this.state = {
      content: (props.content ? props.content : initContent),
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
    console.log('111')
    // try {
    //   const token = this.props.user.token
    //   const { data: content } = await axios.put(`${config.backendUrl}/blog`, {
    //     ...this.state.content
    //   }, {
    //     headers: {
    //       'access-token': token
    //     }
    //   })
    //   console.log('content ->', content)
    //   window.alert('Content has been updated.')
    // } catch (e) {
    //   console.error('e ->', e)
    //   window.alert('Something went wrong!')
    // }
  }

  render () {
    const { content } = this.state

    const submitButtonLabel = content.isNew ? 'Create new' : 'Update'

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
            <button type="submit" className="btn btn-primary btn-sm">{ submitButtonLabel }</button>
            <Link route="/content"><a href="/content" className="btn btn-link btn-sm">Discard</a></Link>
          </form>
        </div>
        <hr />
        {/* <CloudinaryFinder /> */}
      </Main>
    )
  }
}

export default connect(state => state)(ContentAddAndEdit)
