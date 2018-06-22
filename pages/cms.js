import React from 'react'
import Main from '../layouts/main'

export default class CMSMain extends React.Component {
  static async getInitialProps({ reduxStore }) {
    return {}
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
