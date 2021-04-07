import React from "react"
import "./footer.css"
import Partner1 from "./partner1.jpeg"
import Partner2 from "./partner2.jpeg"
import Partner3 from "./partner3.jpeg"
import Partner4 from "./partner4.jpeg"
import Payment1 from "./payment1.jpeg"
import Payment2 from "./payment2.jpeg"
import Payment3 from "./payment3.jpeg"
import Payment4 from "./payment4.jpeg"
import Store1 from "./googleplay.png"
import Store2 from "./appstore.jpeg"

function Footer() {
  return (
    <>
      <footer className='container-fluid d-flex justify-content-between align-content-center'>
        <div className='container'>
          <div className='row'>
            <div className='get-help col-lg-4'>
              <h4>
                <span>
                  <svg
                    height='1em'
                    width='1em'
                    focusable='false'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='false'
                  >
                    <path d='M12 0a12 12 0 100 24 12 12 0 000-24zm0 22.5a10.5 10.5 0 110-21 10.5 10.5 0 010 21z'></path>
                    <circle cx='12' cy='18.37' r='1.13'></circle>
                    <path d='M12 4.5a4.12 4.12 0 00-4.13 4.13.75.75 0 001.5 0A2.63 2.63 0 1112 11.25a.75.75 0 00-.75.75v3a.75.75 0 101.5 0v-2.32A4.12 4.12 0 0012 4.5z'></path>
                  </svg>
                </span>
                Get Help
              </h4>
              <ul>
                <li>
                  <a href='' className='footer-link'>
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href='' className='footer-link'>
                    My Account
                  </a>
                </li>
                <li>
                  <a href='' className='footer-link'>
                    Find Store
                  </a>
                </li>
                <li>
                  <a href='' className='footer-link'>
                    Legal Privacy
                  </a>
                </li>
                <li>
                  <a href='' className='footer-link'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='' className='footer-link'>
                    Gift Card
                  </a>
                </li>
              </ul>
            </div>
            <div className='partners-payments col-lg-4 d-flex flex-column  align-content-center'>
              <h4>
                <span>
                  <svg
                    height='1em'
                    width='1em'
                    focusable='false'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='false'
                  >
                    <path d='M23.8 11.5l-3.36-3.74a.75.75 0 00-.56-.25h-3.37V4.5a.75.75 0 00-.75-.75H3.01a.75.75 0 00-.75.75v12c0 .42.33.76.75.76h1.47a3 3 0 006 0h6.03a3 3 0 006 0h.74c.41 0 .75-.34.75-.75V12a.75.75 0 00-.2-.5zM19.56 9l2.95 3.28v3.47h-.4a2.99 2.99 0 00-5.18 0h-.4V9h3.03zM3.75 5.25h11.26v10.51h-4.95a2.99 2.99 0 00-5.17 0H3.76V5.25zm3.72 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12.04 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'></path>
                  </svg>
                </span>
                Our Partners
              </h4>
              <div className='partners d-flex justify-content-start mb-4'>
                <div className='col-lg-2'>
                  <img className='partner-logo' src={Partner1} alt='' />
                </div>
                <div className='col-lg-2'>
                  <img className='partner-logo ' src={Partner2} alt='' />
                </div>
                <div className='col-lg-2'>
                  <img className='partner-logo' src={Partner3} alt='' />
                </div>
                <div className='col-lg-2'>
                  <img className='partner-logo' src={Partner4} alt='' />
                </div>
              </div>

              <h4>
                <span>
                  <svg
                    height='1em'
                    width='1em'
                    focusable='false'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='false'
                  >
                    <path d='M21.75 2.99H2.25C1.01 2.99 0 3.99 0 5.24v13.52C0 20 1.01 21 2.25 21h19.5c1.24 0 2.25-1 2.25-2.25V5.24C24 4 23 3 21.75 3zm.75 15.77c0 .41-.34.75-.75.75H2.25a.75.75 0 01-.75-.75V9h21v9.76zm0-12.77h-21v-.75c0-.41.34-.75.75-.75h19.5c.41 0 .75.34.75.75V6z'></path>
                    <path d='M15.76 16.5h4.5c.42 0 .75-.33.75-.74v-4.51a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.76.75v4.5c0 .42.34.76.76.76zm.75-4.5h3v3h-3v-3z'></path>
                  </svg>
                </span>
                Payment Methods
              </h4>
              <div className='payment-methods d-flex justify-content-start'>
                <div className='col-lg-2'>
                  <img className='partner-logo' src={Payment1} alt='' />
                </div>
                <div className='col-lg-2'>
                  <img className='partner-logo' src={Payment2} alt='' />
                </div>
                <div className='col-lg-2'>
                  <img className='partner-logo' src={Payment3} alt='' />
                </div>
                <div className='col-lg-2'>
                  <img className='partner-logo' src={Payment4} alt='' />
                </div>
              </div>
            </div>
            <div className='our-promises col-lg-4'>
              <h4>
                <span>
                  <svg
                    height='1em'
                    width='1em'
                    focusable='false'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='false'
                  >
                    <path d='M20.68 13.65a5.23 5.23 0 00-3.43-8.33v-.07a5.25 5.25 0 00-10.5 0v.06a5.22 5.22 0 00-3.43 8.34A5.62 5.62 0 006.37 24h11.25a5.62 5.62 0 003.06-10.35zM12 1.5a3.75 3.75 0 013.75 3.75h-7.5A3.75 3.75 0 0112 1.5zm5.62 21H6.37a4.12 4.12 0 01-1.55-7.94.75.75 0 00.21-1.26 3.7 3.7 0 01-1.28-2.8 3.76 3.76 0 013-3.67V9a.75.75 0 001.5 0V6.75h7.5V9a.75.75 0 101.5 0V6.83c1.71.35 3 1.86 3 3.67a3.7 3.7 0 01-1.28 2.8.75.75 0 00.2 1.26 4.12 4.12 0 01-1.55 7.94z'></path>
                  </svg>
                </span>
                Our Promises
              </h4>
              <ul>
                <li>
                  <a href='' className='footer-link'>
                    <svg
                      height='1em'
                      width='1em'
                      focusable='false'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='false'
                    >
                      <path d='M23.8 11.5l-3.36-3.74a.75.75 0 00-.56-.25h-3.37V4.5a.75.75 0 00-.75-.75H3.01a.75.75 0 00-.75.75v12c0 .42.33.76.75.76h1.47a3 3 0 006 0h6.03a3 3 0 006 0h.74c.41 0 .75-.34.75-.75V12a.75.75 0 00-.2-.5zM19.56 9l2.95 3.28v3.47h-.4a2.99 2.99 0 00-5.18 0h-.4V9h3.03zM3.75 5.25h11.26v10.51h-4.95a2.99 2.99 0 00-5.17 0H3.76V5.25zm3.72 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12.04 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'></path>
                    </svg>{" "}
                    Secure Delivery and returns
                  </a>
                </li>
                <li>
                  <a href='' className='footer-link'>
                    <i class='fas fa-calendar-day'></i> 30-Day Return Policy
                  </a>
                </li>
                <li>
                  <a href='' className='footer-link'>
                    <svg
                      height='1em'
                      width='1em'
                      focusable='false'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='false'
                    >
                      <path d='M21.75 2.53H2.25C1.01 2.53 0 3.54 0 4.78v13.5a2.25 2.25 0 002.25 2.25H9a.75.75 0 000-1.5H2.25a.75.75 0 01-.75-.75V8.53h10.43a5.76 5.76 0 012.05-3H1.5v-.75c0-.41.34-.75.75-.75h19.5c.41 0 .75.34.75.75v2.75a.75.75 0 001.5 0V4.78a2.25 2.25 0 00-2.25-2.25z'></path>
                      <path d='M22.3 10.52v-.25a4.55 4.55 0 00-9.1 0v.25a2.18 2.18 0 00-1.7 2.12v6.65c0 1.2.98 2.18 2.17 2.18h8.16c1.2 0 2.17-.98 2.17-2.18v-6.65c0-1.03-.73-1.9-1.7-2.12zm-7.6-.25a3.05 3.05 0 016.1 0v.2h-6.1v-.2zm7.8 9.02c0 .38-.3.68-.67.68h-8.16a.68.68 0 01-.67-.68v-6.65c0-.37.3-.67.67-.67h8.16c.37 0 .67.3.67.67v6.65z'></path>
                      <path d='M17.75 13.32a1.94 1.94 0 00-.75 3.72v1.78a.75.75 0 001.5 0v-1.78a1.94 1.94 0 00-.75-3.72zm0 2.37a.44.44 0 110-.87.44.44 0 010 .87z'></path>
                    </svg>{" "}
                    Flexible payment options
                  </a>
                </li>
                <li>
                  <a href='' className='footer-link'>
                    <i class='far fa-clock'></i> 7/24 accesible customer service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className='footer-bottom text-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 d-flex align-items-center copyright'>
              &copy; Copyright 2021 DevShop E-Commerce Site. All right reserved.
            </div>
            <div className='col-lg-2 d-flex flex-column justify-content-start'>
              <h5>Apps</h5>
              <div className='stores d-flex'>
                <div className='col-lg-6'>
                  <img className='storeimg' src={Store1} alt='' />
                </div>
                <div className='col-lg-6'>
                  <img className='storeimg' src={Store2} alt='' />
                </div>
              </div>
            </div>

            <div className='col-lg-3 d-flex flex-column'>
              <h5>You can also find us on</h5>
              <div className='social d-flex'>

                    <a href='' className='social-link'>
                      <i class='fab fa-facebook-square'></i>
                    </a>


                    <a href='' className='social-link'>
                      <i class='fab fa-twitter-square'></i>
                    </a>


                    <a href='' className='social-link'>
                      <i class='fab fa-instagram-square'></i>
                    </a>


                    <a href='' className='social-link'>
                      <i class='fab fa-pinterest-square'></i>
                    </a>
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
