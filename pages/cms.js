import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import Main from '../layouts/main'

class CMSMain extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  componentDidMount = () => {
    if (!this.props.user) {
      Router.push('/sign-in?redirect=/cms')
    }
  }

  render () {
    const title = 'CMS'

    return (
      <Main title={title}>
        <div className="container margin-top-20">
          <h1>CMS Main</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim eaque quos distinctio odio magni explicabo odit at? Ut magnam numquam optio architecto impedit neque error eos sunt illum tempore?</p>
        </div>
      </Main>
    )
  }
}

export default connect(state => state)(CMSMain)
