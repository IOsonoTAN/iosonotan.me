import React from 'react'
import {initializeStore} from '../store'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default (App) => {
  return class Redux extends React.Component {
    static async getInitialProps (appContext) {
      const { store } = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = store

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: store.getState()
      }
    }

    constructor(props) {
      super(props)
      const { store, persistor } = getOrCreateStore(props.initialReduxState)

      this.reduxStore = store
      this.persistor = persistor
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} persistor={this.persistor} />
    }
  }
}
