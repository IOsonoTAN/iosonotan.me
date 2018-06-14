import Main from '../layouts/main'

export default class AboutMe extends React.Component {
  render () {
    const title = 'About ME'

    return (
      <Main title={title}>
        <div className="container">
          <h1>About ME</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim eaque quos distinctio odio magni explicabo odit at? Ut magnam numquam optio architecto impedit neque error eos sunt illum tempore?</p>
        </div>
      </Main>
    )
  }
}
