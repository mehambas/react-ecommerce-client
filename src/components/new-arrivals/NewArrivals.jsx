import React, { useState, useEffect } from "react"
import "./newarrivals.css"
import Card from "./Card"
import SaleImg from "./sale-cloth1.jpg"
import SaleImg2 from "./sale-cloth2.jpg"
import axios from "axios"

function NewArrivals() {
  const [newProducts, setNewProducts] = useState([])

  function getNewProducts() {
    axios
      .get("https://react-ecommerce-devshop.herokuapp.com/api/newarrivals")
      .then((results) => {
        setNewProducts(results.data)
      })
  }

  useEffect(getNewProducts, [])

  return (
    <>
      <div className='container new-arrivals d-flex flex-column align-items-center'>
        <div className='header'>
          <h2>New Arrivals</h2>
        </div>
        <div className='filters'>
          <a className='active' href=''>
            All
          </a>
          <Link to=''>Clothing</a>
          <Link to=''>Shoes</a>
          <Link to=''>Sports</a>
          <Link to=''>Accesories</a>
          <Link to=''>Bags</a>
        </div>
        <div className='row cards d-flex justify-content-between new-arrivals-main'>
          {newProducts.map((product) => {
            return (
              <Card
                key={product._id}
                {...product}
                images={product.images.one}
                point={product.star.point}
                count={product.star.count}
              />
            )
          })}
        </div>
      </div>

      <div className='sale-container d-flex align-items-center justify-content-center'>
        <div className='sale-group d-flex align-items-center justify-content-center'>
          <img src={SaleImg} alt='' />
        </div>

        <div className='sale-group d-flex align-items-center justify-content-center'>
          <img src={SaleImg2} alt='' />
        </div>
      </div>
    </>
  )
}

export default NewArrivals
