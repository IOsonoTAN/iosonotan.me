import Main from '../layouts/main'

export default class Resume extends React.Component {
  render () {
    const title = 'Resume'

    return (
      <Main title={title}>
        <div className="container">
          <h1>Resume</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim eaque quos distinctio odio magni explicabo odit at? Ut magnam numquam optio architecto impedit neque error eos sunt illum tempore?</p>
        </div>
      </Main>
    )
  }
}
