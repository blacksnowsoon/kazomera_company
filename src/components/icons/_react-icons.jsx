
import * as BS from 'react-icons/bs'; // Bootstrap
import * as FC from 'react-icons/fc'; // Flat Icons

import PropTypes from 'prop-types';

/**
 * Icon component
 * @returns {A React Icon from Bootstrap OR Flat Icons with default Size 24, Color white}
 * @example <Icon name="BsNewspaper" size={number} color={string}/>
 * @param{name: string, size: number, color: string}
 * @todo  Flat Icons Provide colored Icons 
 * @todo  Bootstrap Provide onColor Icons
 */

const Icon = ({name, size, color, className}) => {
  const group = name.slice(0,2)
  const Target = group === 'Bs' ? BS[name] : FC[name]
  return (
    
      <Target size={size || 24} color={color || 'white'} className={className?.join(" ")} />
  
  )
}

export default Icon;
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.array,
}