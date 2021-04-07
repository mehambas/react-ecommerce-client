import React from "react"
import "./header.css"

function HeaderTop() {
  return (
    <>
      <div className='header-top d-flex justify-content-between'>
        <div className='header-top-left d-flex justify-content-start align-items-center'>
          <div className='header-phone d-flex align-items-center'>
            <i className='fa fa-phone'></i>
            <span className='phone-number'>+1 234 4332 423</span>
          </div>
          <div className='line'>|</div>

          <div className='header-email text-light'>
            <i class='fas fa-at'></i>devshop@gmail.com
          </div>
        </div>
        <div className='header-top-right d-flex justify-content-center align-items-center'>
          <a href='#'>
            <i class='far fa-user-circle'></i>
            <span className='ml-2 text-white account'>My Account</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default HeaderTop
