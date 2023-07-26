import React from 'react'
import { readFileAsDataURL, resizeImage } from 'utiles/utilesMethods';

const SingleImageInput = (props) => {
  const { label, fieldState, onChange, inputRef, errors, maxHeight, className, name } = props
  let fileInput;
  
  const [data, setData] = React.useState(props.value || '')
  const [canvas, setCanvas] = React.useState('')
  const styles = {
    
  }
  

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
    if (file && file.type.match(/^image\//)) {
      readFileAsDataURL(file)
      .then(originURL => 
        resizeImage(originURL, canvas, maxHeight)
        .then(url => {
          setData(url)
          onChange(url)
          console.log(url.length)
        })
      )
    } else {
      setData('')
    }
  }
  React.useEffect(()=> {
    setCanvas(document.createElement('canvas'))
    fileInput.form.addEventListener('reset', ()=> setData(''))

    return () => {
      if (fileInput) {
        fileInput.form.removeEventListener('reset', ()=> setData(''))
      }
    }
  }, [fileInput])
  if (data) {
    styles.backgroundImage = `url('${data}')`
    styles.backgroundRepeat = 'no-repeat'
    styles.backgroundPosition = 'center'
    styles.backgroundSize = 'cover'
  }
  return (
    <div className={className} >
      <input type='hidden' name={name} value={data} />
      <input 
        ref={(n) => (fileInput = n)}
        type='file'
        onChange={handleFileChange}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0,
          opacity: 0
        }}
        />
    </div>
  )
}

export default SingleImageInput