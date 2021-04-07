import React from "react"

function Card({
  product_name,
  brand,
  normal_price,
  discount_price,
  images,
  _id,
  point,
  count,
}) {
  return (
    <div className='col-lg-2 card-comp'>
      <Link to={`/products/${_id}`}>
        <div className='card-top'>
          <img src={images} alt='' />
        </div>
        {/* <i class='fas fa-heart'></i> */}
        <div className='card-bottom d-flex flex-column justify-content-between'>
          <div className='brand-name'>{brand}</div>
          <div className='product-name'>{product_name}</div>
          <div className='info-wrap text-center d-flex justify-content-center align-content-center'>
            <ul className='rating-stars'>
              <li style={{ width: `${point * 20}%` }} className='stars-active'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </li>
              <li>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </li>
            </ul>
            <small className='text-muted pl-2 mt-1'>{count}</small>
          </div>
          <div className='d-flex justify-content-center'>
            <span className='price'>€{normal_price}</span>
            <span className='price-sale'>€{discount_price}</span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card
