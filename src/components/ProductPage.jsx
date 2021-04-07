import React from "react"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import ProductDetail from "./product-page/ProductDetail"
import ProductComments from "./product-page/ProductComments"

function ProductPage() {
  return (
    <>
      <Header />
      <ProductDetail />
      <ProductComments />
      <Footer />
    </>
  )
}

export default ProductPage
