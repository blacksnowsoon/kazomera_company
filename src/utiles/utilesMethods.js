
/**
 * @example
 * <img src={ImgParser(imgPath)} />
 * @param {string} imgPath 
 * @returns encoded src
 */
export const ImgParser = (imgPath) => {
  return new URL(imgPath, import.meta.url).href;
  
  // return require(imgPath)
}

export const readFileAsDataURL = (file) => {
  return new Promise ((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      resolve(e.target.result)
    }
    reader.readAsDataURL(file)
  });
}

export const resizeImage = (imgURL, canvas, maxHeight) => {
  return new Promise((resolve) => {
    const img = new Image()

    img.onload = () => {
      const ctx = canvas.getContext('2d')

      if (img.height > maxHeight) {
        img.width *= maxHeight / img.height
        img.height = maxHeight
      }
      ctx.clearRect( 0, 0, canvas.width, canvas.height)
      canvas.width = img.width
      canvas.height = img.height

      ctx.drawImage(img, 0, 0, img.width, img.height)

      resolve(canvas.toDataURL('image/jpg'))
    }
    img.src = imgURL
  })
}