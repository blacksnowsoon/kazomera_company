import React from 'react'
import MainHeader from '../header_first/mainHeader'
import SecondHeader from '../header_second/secondHeader'
import { images } from '../../assets'
import './minHeader.css'
import { Link } from 'react-router-dom'


export default function MinHeader() {
  return (
    <>
      <div style={{display:'none'}} className='min-header--main-header'>
        <MainHeader  />
      </div>
      <div className='min-header'>
          <MainHeader />
          <div style={{display:'flex',justifyContent:'space-between', alignItems:'center',marginLeft:'15px'}}>
            <SecondHeader />
            <Link to="/">
              <img alt="logo" src={images.logoAddress} style={{minWidth:'200px', paddingInline:"10px"}} />
            </Link>
          </div>
      </div>
    </>
  )
}
