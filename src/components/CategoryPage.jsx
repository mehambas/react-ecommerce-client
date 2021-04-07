import React from "react"
import CategoryInfo from "./category-page/CategoryInfo"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import CategoryFilter from "./category-page/CategoryFilter"
import CategoryProducts from "./category-page/CategoryProducts"

function CategoryPage() {
  return (
    <>
      <Header />
      <CategoryInfo />
      <section className='section-content padding-y'>
        <div className='container'>
          <div className='row'>
            <CategoryFilter />
            <CategoryProducts />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CategoryPage
