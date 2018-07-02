import React from 'react'
import { Link } from '../routes'

export default class Paginate extends React.Component {
  render () {
    const { url, page, pages, onClickAction } = this.props
    const currentPage = parseInt(page, 10)
    const pageNumbers = []
    const clickAction = (number) => (onClickAction ? e => onClickAction(number) : '')

    if (pages === 1) {
      return ''
    }

    for (let i = 1; i <= pages; ++i) {
      pageNumbers.push(i)
    }

    const renderPageItems = pageNumbers.map(number => {
      const classes = (currentPage === number ? 'page-item active' : 'page-item')

      return <li key={number} className={classes}><Link route={`/${url}?page=${number}`}><a className="page-link" onClick={clickAction(number)}>{number}</a></Link></li>
    })

    const previousPage = (currentPage - 1)
    const previousBtn = <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}><Link route={`/${url}?page=${previousPage}`}><a className="page-link" onClick={clickAction(previousPage)}>Previous</a></Link></li>

    const nextPage = (currentPage + 1)
    const nextBtn = <li className={currentPage === pages ? 'page-item disabled' : 'page-item'}><Link route={`/${url}?page=${nextPage}`}><a className="page-link" onClick={clickAction(nextPage)}>Next</a></Link></li>

    return <nav aria-label="Page navigation example">
      <ul className="pagination">
        { previousBtn }
        { renderPageItems }
        { nextBtn }
      </ul>
    </nav>
  }
}
