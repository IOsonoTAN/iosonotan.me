import React from 'react'
import axios from 'axios'
import Router from 'next/router'
import { connect } from 'react-redux'
import Main from '../layouts/main'
import isLoading from '../lib/loading'
import { loginSuccess } from '../store'

class SignIn extends React.Component {
  static async getInitialProps({ query }) {
    return { query }
  }

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

  handleSubmit = async (event) => {
    event.preventDefault()
    isLoading(true)
    const { BACKEND_URL } = process.env
    const { username, password } = this.state
    const { query } = this.props

    try {
      const response = await axios.post(`${BACKEND_URL}/sign-in`, {
        username,
        password
      })

      this.props.dispatch(loginSuccess(response.data))

      Router.push(query.redirect || '/cms')

      isLoading(false)
    } catch ({ response }) {
      const { code, message } = response.data.error

      this.setState({
        resultMessage: `${message} (${code})`,
        resultClasses: 'alert alert-danger'
      })

      isLoading(false)
    }
  }

  render () {
    const { title } = this.state

    return (
      <Main title={title}>
        <div className="container margin-top-20">
          <h1>{title}</h1>
          <hr />
          <div className={this.state.resultClasses}>{this.state.resultMessage}</div>
          <form className="formLogin" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="col-form-label">Username</label>
              <input type="text" className="form-control" id="username" tabIndex="1" autoFocus placeholder="email or username is greater or equal than 4 digits" onChange={this.handleChange} value={this.state.username} />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-form-label">Password</label>
              <input type="password" className="form-control" id="password" tabIndex="2" placeholder="password is greater or equal than 4 digits" onChange={this.handleChange} value={this.state.password} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={!this.validateForm()} >Submit</button>
          </form>
        </div>
      </Main>
    )
  }
}

export default connect(state => state)(SignIn)
