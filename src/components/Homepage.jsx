import React from "react"
import Header from "./header/Header"
import Carousel from "./carousel/Carousel"
import NewArrivals from "./new-arrivals/NewArrivals"
import FeaturedProducts from "./featured-products/FeaturedProducts"
import Brand from "./brands/Brand"
import Newsletter from "./newsletter/Newsletter"
import Footer from "./footer/Footer"

function Homepage() {
  return (
    <div>
      <Header />
      <Carousel />
      <NewArrivals />
      <FeaturedProducts />
      <Brand />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Homepage
