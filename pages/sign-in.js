import Main from '../layouts/main'
import isLoading from '../lib/loading'

export default class Resume extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 'Back office sign-in',
      username: '',
      password: '',
      resultMessage: '',
      resultClasses: ''
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
    isLoading(true)

    const { username, password } = this.state

    setTimeout(() => {
      isLoading(false)
    }, 3000)


    // // const item = localStorage.getItem('test')
    // // console.log('item ->', item)

    // localStorage.setItem('test', `${username}, ${password}`)
  }

  render () {
    const { title } = this.state

    return (
      <Main title={title}>
        <div className="container margin-top-20">
          <h1>{title}</h1>
          <hr />
          <div className="row">
            <form className="formLogin col-md-8 order-2 order-md-1" onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="username" className="col-md-2 col-form-label">Username</label>
                <div className="col-md-8">
                  <input type="text" className="form-control" id="username" tabIndex="1" autoFocus placeholder="email or username is greater or equal than 4 digits" onChange={this.handleChange} value={this.state.username} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="col-md-2 col-form-label">Password</label>
                <div className="col-md-8">
                  <input type="password" className="form-control" id="password" tabIndex="2" placeholder="password is greater or equal than 4 digits" onChange={this.handleChange} value={this.state.password} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mb-2 offset-md-2" disabled={!this.validateForm()} >Sign in</button>
            </form>
            <div className="col-md-4 order-1 order-md-2 request-result">
              <div className={this.state.resultClasses}>{this.state.resultMessage}</div>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}
