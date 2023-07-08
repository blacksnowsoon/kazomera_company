
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