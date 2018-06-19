import { Link } from '../routes'

export default class Paginate extends React.Component {
  render () {
    const { url, page, pages } = this.props
    const currentPage = parseInt(page, 10)
    const pageNumbers = []

    if (pages === 1) {
      return ''
    }

    for (let i = 1; i <= pages; ++i) {
      pageNumbers.push(i)
    }

    const renderPageItems = pageNumbers.map(number => {
      const classes = (currentPage === number ? 'page-item active' : 'page-item')

      return <li key={number} className={classes}><Link route={`/${url}?page=${number}`}><a className="page-link">{number}</a></Link></li>
    })

    const previousBtn = <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}><Link route={`/${url}?page=${currentPage - 1}`}><a className="page-link">Previous</a></Link></li>
    const nextBtn = <li className={currentPage === pages ? 'page-item disabled' : 'page-item'}><Link route={`/${url}?page=${currentPage + 1}`}><a className="page-link">Next</a></Link></li>

    return <nav aria-label="Page navigation example">
      <ul className="pagination">
        { previousBtn }
        { renderPageItems }
        { nextBtn }
      </ul>
    </nav>
  }
}
