import Main from './main'

export default class ErrorPage extends React.Component {
  render () {
    const { message, code } = this.props

    const errorMessage = (message ? message : 'please contact to admin for this issue')
    const errorCode = (code ? code : 'unknown')

    return (
      <Main title="Something went wrong!">
        <div className="container margin-top-20">
          <div className="row">
            <div className="col-sm-12">
              <h1>Oop! something went wrong!</h1>
              <p><strong>{errorMessage}</strong> ({errorCode})</p>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}
