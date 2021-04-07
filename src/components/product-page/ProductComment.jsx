import React from "react"

function ProductComment({ name, date, content, star, like, dislike }) {
  return (
    <article className='box mb-3'>
      <div className='icontext w-100'>
        <div className='text'>
          <span className='date text-muted float-md-right'>{date}</span>
          <h6 className='mb-1'>{name}</h6>
          <ul class='rating-stars'>
            <li class='stars-active' style={{ width: `${star * 20}%` }}>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
            </li>
            <li>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
            </li>
          </ul>
          <span className='label-rating text-warning'>
            {star > 3.8 && star < 5.1
              ? "Good"
              : star > 2.5 && star < 3.8
              ? "Middle"
              : "Bad"}
          </span>
        </div>
      </div>
      <div className='mt-3'>
        <p>{content}</p>
      </div>
    </article>
  )
}

export default ProductComment
