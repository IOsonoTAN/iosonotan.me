import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import withReduxStore from '../lib/with-redux-store'
import Loading from '../components/loading'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore, persistor } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <PersistGate loading={<Loading classes={'visible'} />} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
