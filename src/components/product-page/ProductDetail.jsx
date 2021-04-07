import React, { useState, useEffect } from "react"
import ProductDetailImage from "./ProductDetailImage"
import ProductInfo from "./ProductInfo"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./product.css"
import ProductSimilar from "./ProductSimilar"

function ProductDetail() {
  const [productDetails, setProductDetails] = useState([])

  const params = useParams()

  function getProductDetails() {
    axios
      .get(
        `https://react-ecommerce-devshop.herokuapp.com/api/product/detail/${params.id}`
      )
      .then((results) => {
        setProductDetails(results.data[0])
      })
  }

  useEffect(getProductDetails, [])

  return (
    <>
      <ProductInfo
        category={productDetails.category}
        product_name={productDetails.product_name}
        category_url={productDetails.category_url}
      />
      <div className='container'>
        <div className='card'>
          <div className='row no-gutters'>
            <aside className='col-md-6'>
              <article className='gallery-wrap'>
                <ProductDetailImage {...productDetails.images} />
              </article>
            </aside>
            <main className='col-md-6 border-left'>
              <article className='content-body'>
                <h2 className='title'>{productDetails.product_name}</h2>

                <div className='rating-wrap my-3'>
                  <ul className='rating-stars'>
                    <li style={{ width: "80%" }} className='stars-active'>
                      <img
                        src='bootstrap-ecommerce-html/images/icons/stars-active.svg'
                        alt=''
                      />
                    </li>
                    <li>
                      <img
                        src='bootstrap-ecommerce-html/images/icons/starts-disable.svg'
                        alt=''
                      />
                    </li>
                  </ul>
                </div>

                <div className='mb-3'>
                  <span className='text-danger'>
                    ${productDetails.discount_price}
                  </span>
                  <span className='price h4 pl-3'>
                    ${productDetails.normal_price}
                  </span>
                </div>

                <p>{productDetails.description}</p>

                <dl className='row'>
                  <dt className='col-sm-3'>Brand</dt>
                  <dd className='col-sm-9'>{productDetails.brand}</dd>

                  <dt className='col-sm-3'>Color</dt>
                  <dd className='col-sm-9'>{productDetails.color}</dd>

                  <dt className='col-sm-3'>Gender</dt>
                  <dd className='col-sm-9'>{productDetails.gender}</dd>
                </dl>

                <hr />
                <div className='row'>
                  <div className='form-group col-md flex-grow-0'>
                    <label>Quantity</label>
                    <div className='input-group mb-3 input-spinner'>
                      <div className='input-group-prepend'>
                        <button
                          className='btn btn-light'
                          type='button'
                          id='button-plus'
                        >
                          -
                        </button>
                      </div>
                      <input type='text' className='form-control' value='1' />
                      <div className='input-group-append'>
                        <button
                          className='btn btn-light'
                          type='button'
                          id='button-minus'
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='form-group col-md'>
                    <label>Select size</label>
                    <div className='mt-2'>
                      <label className='custom-control custom-radio custom-control-inline'>
                        <input
                          type='radio'
                          name='select_size'
                          className='custom-control-input'
                        />
                        <div className='custom-control-label'>Small</div>
                      </label>

                      <label className='custom-control custom-radio custom-control-inline'>
                        <input
                          type='radio'
                          name='select_size'
                          className='custom-control-input'
                        />
                        <div className='custom-control-label'>Medium</div>
                      </label>

                      <label className='custom-control custom-radio custom-control-inline'>
                        <input
                          type='radio'
                          name='select_size'
                          className='custom-control-input'
                        />
                        <div className='custom-control-label'>Large</div>
                      </label>

                      <label className='custom-control custom-radio custom-control-inline'>
                        <input
                          type='radio'
                          name='select_size'
                          className='custom-control-input'
                        />
                        <div className='custom-control-label'>X-Large</div>
                      </label>
                    </div>
                  </div>
                </div>
                <a href='#' className='btn  btn-buy'>
                  Buy now
                </a>
                <a href='#' className='btn  btn-card'>
                  <span className='text btn-card-text'>Add to cart</span>
                  <i className='fas fa-shopping-cart'></i>
                </a>
              </article>
            </main>
          </div>
        </div>
      </div>
      <ProductSimilar
        category_url={productDetails.category_url}
        id={productDetails._id}
      />
    </>
  )
}

export default ProductDetail
