import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Main from '../layouts/main'
import Paginate from '../components/Paginate'
import { Link } from '../routes'
import { isLoggedIn } from '../lib/auth'
import config from '../config'

class ContentMain extends React.Component {
  static async getInitialProps ({ asPath, query }) {
    const page = parseInt(query.page, 10) || 1

    return { asPath, page }
  }

  constructor (props) {
    super(props)

    this.state = {
      title: 'Content Management System',
      contents: {
        docs: [],
        page: 1,
        pages: 1
      }
    }
  }

  getContens = async (page = 1) => {
    const { data: contents } = await axios.get(`${config.backendUrl}/blog?page=${page}`)

    this.setState({
      contents
    })
  }

  componentDidMount = async () => {
    isLoggedIn(this.props)
    this.getContens(this.props.page)
  }

  render () {
    const { contents } = this.state

    const tableContents = contents.docs.map((content, index) => {
      return <tr key={index}>
        <td>{content.title}</td>
        <td>{content.category}</td>
        <td>{content.tag.join(', ')}</td>
        <td>{content.status}</td>
        <td align="right">
          <ul className="control-menus">
            <li><Link route={`/content/${content._id}/edit`}><a className="btn btn-primary btn-sm"><i className="fas fa-edit"></i> Edit</a></Link></li>
            <li><Link route={`/content/remove/${content._id}`}><a className="btn btn-link btn-sm"><i className="fas fa-trash"></i> Delete</a></Link></li>
          </ul>
        </td>
      </tr>
    })

    return (
      <Main title={this.state.title}>
        <div className="container margin-top-20">
          <h1>All Contents</h1>
          <Link route={`/content/add`}><a className="btn btn-primary btn-sm"><i className="fas fa-plus"></i> Add new</a></Link>
          <hr />
          <Paginate url={'content'} page={contents.page} pages={contents.pages} onClickAction={this.getContens} />
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Tags</th>
                <th scope="col" colSpan={2}>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableContents}
            </tbody>
          </table>
          <hr/>
          <Paginate url={'content'} page={contents.page} pages={contents.pages} onClickAction={this.getContens} />
        </div>
      </Main>
    )
  }
}

export default connect(state => state)(ContentMain)
