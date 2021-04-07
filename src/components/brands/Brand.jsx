import React from "react"
import Brand1 from "./brand1.jpg"
import Brand2 from "./brand2.jpg"
import Brand3 from "./brand3.jpg"
import Brand4 from "./brand4.jpg"
import Brand5 from "./brand5.jpg"
import Brand6 from "./brand6.png"
import Brand7 from "./brand7.jpeg"
import Brand8 from "./brand8.jpeg"
import Brand9 from "./brand9.jpg"
import Brand10 from "./brand10.jpg"
import Brand11 from "./brand11.jpg"
import Brand12 from "./brand12.jpeg"
import "./brand.css"

function Brand() {
  return (
    <div className='container-fluid brand-outside'>
      <div className='container mt-5 brand'>
        <h2 className='text-center mb-5 brand-text'>Our Brands</h2>
        <div className='row'>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand1} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand2} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand3} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand4} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand5} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand6} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand7} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand8} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand9} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand10} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand11} alt='' />
          </div>
          <div className='col-lg-2'>
            <img className='w-100' src={Brand12} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand
