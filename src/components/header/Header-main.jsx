import React from "react"
import MainLogo from "./logo1.png"
import {Link} from "react-router-dom"

function HeaderMain() {
  return (
    <div className='container d-flex justify-content-between align-items-center header-main'>
      <div className='genders'>
        <a href='#' className='gender active'>
          Women
        </a>
        <a href='#' className='gender'>
          Men
        </a>
        <a href='#' className='gender'>
          Kids
        </a>
      </div>
      <div className='logo'>
        <Link to='/'>
          <img src={MainLogo} alt='' />
        </Link>
      </div>
      <div className='account-icons'>
        <a href='#'>
          <svg
            class='zds-icon RC794g _98USAM DlJ4rT H3jvU7 pVrzNP'
            height='1em'
            width='1em'
            focusable='false'
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='false'
            aria-labelledby='login-taskv'
            role='img'
          >
            <title id='login-taskv'>Login</title>
            <path d='M21.64 22.87a28.72 28.72 0 00-6.46-7.82c-2.32-1.9-4.04-1.9-6.37 0a28.74 28.74 0 00-6.45 7.82.75.75 0 001.29.76 27.26 27.26 0 016.11-7.42c.61-.59 1.4-.97 2.24-1.09.85.1 1.63.49 2.24 1.1a27.25 27.25 0 016.11 7.4.75.75 0 101.3-.75zM12 12a6 6 0 100-12 6 6 0 000 12zm0-10.5a4.5 4.5 0 11-.01 9.01A4.5 4.5 0 0112 1.5z'></path>
          </svg>
        </a>
        <a href='#'>
          <svg
            class='zds-icon RC794g _98USAM DlJ4rT H3jvU7 pVrzNP'
            height='1em'
            width='1em'
            focusable='false'
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='false'
            aria-labelledby='wish-list-yywsv'
            role='img'
          >
            <title id='wish-list-yywsv'>Wish list</title>
            <path d='M17.49 1.1l-.15.01A6.55 6.55 0 0012 3.91a6.57 6.57 0 00-5.37-2.8A6.4 6.4 0 00.09 7.44c0 7.67 11.03 15.03 11.5 15.34a.75.75 0 00.82 0c.47-.31 11.5-7.67 11.5-15.36a6.43 6.43 0 00-6.42-6.3zM12 21.24c-1.98-1.4-10.4-7.7-10.4-13.79A4.93 4.93 0 016.6 2.62a5.03 5.03 0 014.69 3.15c.22.57 1.16.57 1.39 0a5.08 5.08 0 014.7-3.16h.01a4.92 4.92 0 015 4.82c0 6.09-8.42 12.4-10.4 13.8z'></path>
          </svg>{" "}
        </a>
        <a href='#'>
          {" "}
          <svg
            class='zds-icon RC794g _98USAM DlJ4rT H3jvU7 pVrzNP'
            height='1em'
            width='1em'
            focusable='false'
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='false'
            aria-labelledby='your-bag-i9euo'
            role='img'
          >
            <title id='your-bag-i9euo'>Your bag</title>
            <path d='M21.2 8.71a2.98 2.98 0 00-3-2.72h-.94v-.76a5.26 5.26 0 00-10.52 0V6H5.8A2.98 2.98 0 002.81 8.7L1.7 20.73V21a3 3 0 003 3l14.6-.03h.26a3 3 0 002.72-3.27l-1.1-11.99zM8.24 5.23a3.75 3.75 0 017.5 0V6h-7.5v-.76zM19.3 22.47l-14.6.03a1.5 1.5 0 01-1.49-1.63l1.1-12.02c.06-.77.7-1.37 1.48-1.36h.95v2.25a.75.75 0 001.5 0V7.49h7.51v2.25a.75.75 0 101.5 0V7.49h.96c.77 0 1.42.59 1.49 1.36l1.09 12v.12c0 .83-.66 1.5-1.49 1.5z'></path>
          </svg>{" "}
        </a>
      </div>
    </div>
  )
}

export default HeaderMain
