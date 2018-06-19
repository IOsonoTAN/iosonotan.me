import Main from '../layouts/main'

export default class ContactMe extends React.Component {
  static async getInitialProps() {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })
    return {}
  }

  render () {
    const title = 'Contact me'

    return (
      <Main title={title}>
        <div className="container">
          <h1>Contact form</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim eaque quos distinctio odio magni explicabo odit at? Ut magnam numquam optio architecto impedit neque error eos sunt illum tempore?</p>
        </div>
      </Main>
    )
  }
}
