import React from "react"
import "./featured.css"
import CardGroup from "./CardGroup"


function FeaturedProducts() {
  return (
    <div className='featured-outside'>
      <div className='featured container mt-5'>
        <h2 className='text-center'>Featured Products</h2>
        <CardGroup name='Clothing' name2='Shoes' name3='Accessiories' name4='Bags' name5='Sport' />
        
      </div>
    </div>
  )
}

export default FeaturedProducts
