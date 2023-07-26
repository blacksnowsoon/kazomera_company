
import React from 'react'

const InputText = (props) => {
  const {  name, type, label, fieldState, onChange, inputRef, errors} = props
  
  const {invalid, isDirty } = fieldState
  const [value, setValue] = React.useState(props.value || '')

  const handleOnChange = (e) => {
    setValue(e.target.value)
    onChange && onChange(e)
  }
  const handleOnBlur = () => {

  }
  return (
    <div>
      <textarea 
      className='textarea' 
      type={(type && type ) || 'text'} 
      name={name} 
      onChange={handleOnChange} 
      onBlur={handleOnBlur} 
      placeholder='انشر....خبر' 
      value={value}
      />
    </div>
  )
}

export default InputText