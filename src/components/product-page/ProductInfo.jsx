import React from "react"
import "./product.css"

function ProductInfo({ category, product_name, category_url }) {
  return (
    <section className='product-info product-detail'>
      <div className='container'>
        <nav>
          <ol className='breadcrumb text-white'>
            <li className='breadcrumb-item'>
              <a href='/'>Home</a>
            </li>
            <li className='breadcrumb-item'>
              <a href={`/category/${category_url}`}>{category}</a>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              {product_name}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default ProductInfo
