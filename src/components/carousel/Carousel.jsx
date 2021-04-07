import React from "react"
import SlideOne from "./slide1.jpg"
import SlideTwo from "./slide2.jpg"
import SlideThree from "./slide3.jpg"
import "./carousel.css"

function Carousel() {
  return (
    <>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active slides'>
            <img src={SlideOne} className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='slide-header1'>Shoes and Clothes</h5>
              <button type='submit'>Shop Now</button>
             
            </div>
          </div>
          <div className='carousel-item slides'>
            <img src={SlideTwo} className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='slide-header2'>Bags and Accesories</h5>
              <button type='submit'>Shop Now</button>
              
            </div>
          </div>
          <div className='carousel-item slides'>
            <img src={SlideThree} className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='slide-header3'>New Season Kids Clothes</h5>
              <button type='submit'>Shop Now</button>
              <p className='slide-text'></p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel
