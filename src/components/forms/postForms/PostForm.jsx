import './formStyles.css'
import React from 'react'
import ControllerField from '../ControllerField'
import { useForm } from 'react-hook-form'
import InputText from '../Inputs/TextArea'
import SingleImageInput from '../Inputs/SingleImageInput'


const PostForm = ({onAddPost}) => {
  const { handleSubmit, control, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      content: '',
      imageURL: ''
    }
  })

  const onFormSubmit = (data) => {
    console.log(data)
    onAddPost && onAddPost(data)
    reset()
  }

  
  return (
    <form className='post-form'>
      <ControllerField
        {...{
          control,
          name: 'content',
          rules: {

          },
          render: (props) => (<InputText type={'text'}  {...props} />)
        }}
      />
      <ControllerField
        {...{
          control,
          name: 'imageURL',
          rules: {

          },
          render: (props) => (<SingleImageInput maxHeight={600} className={'post-image-container'} {...props} />)
        }}
      />
    
      
      <button className='btn submit-btn' type='button' onClick={handleSubmit(onFormSubmit)}>نشر</button>
    </form>
  )
}

export default PostForm