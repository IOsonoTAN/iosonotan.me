import React from 'react'

class TextEditor extends React.Component {
  constructor (props) {
    super(props)

    if (document) {
      this.quill = require('react-quill')
    }
  }

  render () {
    const { detail, handleDetail } = this.props
    const Quill = this.quill
    const textEditor = (detail, handleDetail) => {
      if (Quill) {
        return <Quill
          onChange = { handleDetail }
          theme = "bubble"
          value = { detail }
        />
      }
      return null
    }
    return textEditor(detail, handleDetail)
  }
}

export default TextEditor
