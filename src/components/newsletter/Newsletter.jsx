import React from "react"
import "./newsletter.css"

function Newsletter() {
  return (
    <div className='newsletter-subscribe container-fluid'>
      <div className='container newsletter-outside rounded'>
        <div className='intro'>
          <h2 className='text-center newsletter'>
            Subscribe to our Newsletter
          </h2>
          <p className='text-center subscribe-text'>
            Subscribe to the DevShop mailing list to receive <br/> update on new
            arrivals special offers <br/> and other discount information.
          </p>
        </div>
        <form className='form-inline' method='post'>
          <div className='form-group d-flex justify-content-center'>
            <input
              className='form-control'
              type='email'
              name='email'
              placeholder='Enter your email here ...'
            />
            <div className='form-group'>
              <button className='btn btn-primary text-dark' type='button'>
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
