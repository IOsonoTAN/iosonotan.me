import React from 'react'

class SelectGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, label, value, handleChange, selectOptions } = this.props
    let { wrapperClasses, selectClasses } = this.props

    if (!wrapperClasses) wrapperClasses = ''
    if (!selectClasses) selectClasses = ''

    const options = selectOptions.map((option, i) => <option key={i} value={option.value}>{option.label}</option>)

    return <div className={`form-group ${wrapperClasses}`}>
      <label htmlFor={name}>{label}</label>
      <select className={`form-control ${selectClasses}`} name={name} value={value} onChange={handleChange}>
        { options }
      </select>
    </div>
  }
}

export default SelectGroup
