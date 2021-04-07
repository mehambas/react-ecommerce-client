import React, { useState, useEffect } from "react"
import ProductComment from "./ProductComment"
import axios from "axios"
import { useParams } from "react-router-dom"

function ProductComments() {
  const [comments, setComment] = useState([])
  const params = useParams()

  function getComments() {
    axios
      .get(
        `https://react-ecommerce-devshop.herokuapp.com/api/comments/${params.id}`
      )
      .then((results) => {
        setComment(results.data)
      })
  }

  useEffect(getComments, [])

  return (
    <>
      <section className='section-content padding-y bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <header className='section-heading'>
                <h3>Reviews</h3>
                <div className='rating-wrap'>
                  <ul class='rating-stars'>
                    <li class='stars-active' style={{ width: "88%" }}>
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
                  <strong className='label-rating text-lg'>
                    4.5 <span className='text-muted'>| {comments.length}</span>
                  </strong>
                </div>
              </header>

              {comments.map((comment) => {
                return <ProductComment key={comment._id} {...comment} />
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductComments
