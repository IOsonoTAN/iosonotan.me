import React from 'react'

class TextEditor extends React.Component {
  constructor (props) {
    super(props)

    if (document) {
      this.quill = require('react-quill')
    }
  }

  render () {
    const Quill = this.quill
    const { detail, handleDetail } = this.props
    const modules = {
      toolbar: [
        [{ 'header': [2, 3, 4, false] }],
        [{ 'color': [] }, { 'background': [] }, 'bold', 'italic', 'underline'],
        ['blockquote', { 'list': 'ordered' }, { 'list': 'bullet' }, { 'align': [] }, 'link', 'image'],
        ['clean']
      ]
    }
    const formats = [
      'header',
      'color', 'background', 'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent', 'align',
      'link', 'image'
    ]
    const textEditor = (detail, handleDetail) => {
      if (Quill) {
        return <Quill
          onChange={ handleDetail }
          value={ detail }
          modules={ modules }
          formats={ formats }
        />
      }
      return null
    }
    return textEditor(detail, handleDetail)
  }
}

export default TextEditor
