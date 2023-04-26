import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { images } from '../../assets';
import './account.css';

export default function Account() {
  return (
    <div className='account'>
			{/* <div className='account__header'>
				<p>EN | AR</p>
				<p>Signup</p>
				<img alt="kazomera logo" src={images.logoAddress} />
			</div> */}
			<div className='account__body'>
				<div className='account__box'>
					<Link to="/">
						<img alt="Kazomera logo" src={images.logo} />
					</Link>
					<Outlet />
				</div>
			</div>
		</div>
  )
}
