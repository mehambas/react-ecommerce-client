import React, { useState, useEffect } from "react"
import Card from "../new-arrivals/Card"
import axios from "axios"

function ProductSimilar(props) {
  const [similarProduct, setSimilarProduct] = useState([])

  function getSimilarProducts() {
    if (props.category_url !== undefined) {
      var adress = `https://react-ecommerce-devshop.herokuapp.com/api/product/similar/${props.category_url}/${props.id}`
      axios.get(adress).then((results) => {
        setSimilarProduct(results.data)
      })
    }
  }

  useEffect(getSimilarProducts, [props.category_url !== undefined])

  return (
    <div className='container'>
      <div className='card card-body'>
        <h4>Others also bought</h4>
        <div className='row'>
          {similarProduct.map((products) => {
            return (
              <Card
                key={products._id}
                {...products}
                images={products.images.one}
                point={products.star.point}
                count={products.star.count}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductSimilar
