import React, { useEffect } from 'react'
import './menu.css';

export default function Menu({isMenu, setMenu}) {

  return (
    <div className='menu'>
			<div className='menu__rightside'>
				1
			</div>
			<div className='menu__leftside' onClick={() => setMenu(false)}></div>
		</div>
  )
}
