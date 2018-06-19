import Main from '../layouts/main'

export default class Resume extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 'Back office sign-in',
      username: '',
      password: '',
    }
  }

  validateForm () {
    return this.state.username.length >= 4 && this.state.password.length >= 4
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('this.state ->', this.state)
  }

  render () {
    const { title } = this.state

    return (
      <Main title={title}>
        <div className="container">
          <h1>{title}</h1>
          <hr />
          <div className="row">
            <form className="formLogin col-md-8" onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="username" className="col-md-2 col-form-label">Username</label>
                <div className="col-md-8">
                  <input type="text" className="form-control" id="username" tabIndex="1" autoFocus placeholder="email or username is greater or equal than 4 digits" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="col-md-2 col-form-label">Password</label>
                <div className="col-md-8">
                  <input type="password" className="form-control" id="password" tabIndex="2" placeholder="password is greater or equal than 4 digits" onChange={this.handleChange} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mb-2 offset-md-2" disabled={!this.validateForm()} >Sign in</button>
            </form>
          </div>
        </div>
      </Main>
    )
  }
}
