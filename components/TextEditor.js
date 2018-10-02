import React from 'react'
import CKEditor from "react-ckeditor-component"

const TextEditor = ({ detail, handleDetail }) => {
  return (
    <CKEditor
      activeClass = "textEditor"
      content = { detail }
      config = {{
        // customConfig: '/static/js/ckeditor/config.js'
        bodyClass: 'editorContents',
        // contentsCss: '/static/style.css',
        toolbarGroups: [
          { name: 'document', groups: ['mode', 'document', 'doctools'] },
          { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
          { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
          { name: 'links' },
          { name: 'insert' },
          { name: 'tools' }
        ]
      }}
      events = {{
        change: handleDetail
      }}
    />
  )
}

export default TextEditor
