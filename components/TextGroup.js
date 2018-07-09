import React from 'react'

class TextGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, label, value, handleChange } = this.props
    let { type, wrapperClasses, inputClasses, placeholder } = this.props

    if (!type) type = 'text'
    if (!wrapperClasses) wrapperClasses = ''
    if (!inputClasses) inputClasses = ''
    if (!placeholder) placeholder = ''

    return <div className={`form-group ${wrapperClasses}`}>
      <label htmlFor={name}>{label}</label>
      <input type={type} className={`form-control ${inputClasses}`} name={name} placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  }
}

export default TextGroup
