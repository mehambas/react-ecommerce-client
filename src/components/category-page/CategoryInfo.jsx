import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function CategoryInfo() {
  const params = useParams()

  const [categoryInfo, setCategoryInfo] = useState([
    {
      category_name: "",
    },
  ])

  function getCategoryInfos() {
    let adress = `https://react-ecommerce-devshop.herokuapp.com/api/category/${params.category_url}`
    axios.get(adress).then((results) => {
      setCategoryInfo(results.data)
    })
  }

  useEffect(getCategoryInfos, [])

  return (
    <section className='product-info product-detail'>
      <div className='container'>
        <nav>
          <ol className='breadcrumb text-white'>
            <li className='breadcrumb-item'>
              <a href='/'>Home</a>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              {categoryInfo[0].category_name}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default CategoryInfo
