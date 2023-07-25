import React from 'react'
import { readFileAsDataURL, resizeImage } from 'utiles/utilesMethods';

const SingleImageInput = (props) => {
  const { label, fieldState, onChange, inputRef, errors, maxHeight, className, name } = props
  let fileInput;
  console.log("image",props)
  const [data, setData] = React.useState(props.value || '')
  const [canvas, setCanvas] = React.useState('')
  const styles = {
    position: 'relative'
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
    <div className={className} style={styles}>
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
          top: 0,
          opacity: 0
        }}
        />
    </div>
  )
}

export default SingleImageInput