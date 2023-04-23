import React from 'react'
import MainHeader from '../header_first/mainHeader'
import SecondHeader from '../header_second/secondHeader'
import { images } from '../../assets'
import './minHeader.css'


export default function MinHeader() {
  return (
    <div className='min-header'>
      <MainHeader />
        <div style={{display:'flex',justifyContent:'space-between', alignItems:'center',marginLeft:'15px'}}>
          <SecondHeader />
          <a href="/">
            <img alt="logo" src={images.logoAddress} style={{minWidth:'200px', paddingInline:"10px"}} />
          </a>
        </div>
    </div>
  )
}
