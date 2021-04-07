import React, { useState, useEffect } from "react"
import Card from "../new-arrivals/Card"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./category.css"

function CategoryProducts() {
  // localhost:3000/category/sport?page=1&?color=blue
  // query.get("page") ==> 1
  const query = new URLSearchParams(useLocation().search)
  const brand = query.get("brand") === null ? [] : query.get("brand")
  const min = query.get("min") === null ? 0 : query.get("min")
  const max = query.get("max") === null ? 999999 : query.get("max")

  const params = useParams()

  let page = parseInt(query.get("page"))

  const [products, setProducts] = useState([])
  const [counts, setCount] = useState()

  function getProducts() {
    let adress = `http://localhost:3001/api/category/${params.category_url}/${page}/?option=${option}&brand=${brand}&min=${min}&max=${max}`
    axios.get(adress).then((results) => {
      setProducts(results.data)
    })
  }

  // console.log(products[0].category)

  function getCounts() {
    let adress = `http://localhost:3001/api/productcount/${params.category_url}/?brand=${brand}&min=${min}&max=${max}`
    axios.get(adress).then((results) => {
      setCount(results.data.count)
    })
  }

  const option = query.get("option") === null ? "1" : query.get("option")

  function getSelectedOption(e) {
    let option = e.target.value
    var adress = ""
    if (option === "Latest Items") {
      adress = `http://localhost:3000/category/${params.category_url}/?page=1/&option=latestitems&brand=${brand}&min=${min}&max=${max}`
    } else if (option === "Most Popular") {
      adress = `http://localhost:3000/category/${params.category_url}/?page=1/&option=mostpopular&brand=${brand}&min=${min}&max=${max}`
    } else if (option === "Cheapest") {
      adress = `http://localhost:3000/category/${params.category_url}/?page=1/&option=cheapest&brand=${brand}&min=${min}&max=${max}`
    }
    window.location.href = adress
  }

  let actuelOption = "Latest Items"

  if (option === "mostpopular") {
    actuelOption = "Most Popular"
  } else if (option === "cheapest") {
    actuelOption = "Cheapest"
  }

  useEffect(getProducts, [])
  useEffect(getCounts, [])

  return (
    <>
      <main className='col-md-9'>
        <header className='border-bottom mb-4 pb-3'>
          <div className='form-inline'>
            <span className='mr-md-auto'>{counts} Items found</span>
            <select
              onChange={getSelectedOption}
              defaultValue={actuelOption}
              className='mr-2 form-control'
            >
              <option>Latest Items</option>
              <option>Most Popular</option>
              <option>Cheapest</option>
            </select>
            <div className='btn-group'>
              <a
                href='#'
                className='btn btn-outline-secondary'
                data-toggle='tooltip'
                title=''
                data-original-title='List view'
              >
                <i className='fa fa-bars'></i>
              </a>
              <a
                href='#'
                className='btn  btn-outline-secondary active'
                data-toggle='tooltip'
                title=''
                data-original-title='Grid view'
              >
                <i className='fa fa-th'></i>
              </a>
            </div>
          </div>
        </header>

        <div className='row'>
          {products.map((product) => {
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

        <nav className='mt-4 page-list' aria-label='Page navigation sample'>
          <ul className='pagination'>
            <li>
              <a
                className='page-link'
                href={
                  page !== 1 &&
                  `?page=1&option=${option}&brand=${brand}&min=${min}&max=${max}`
                }
              >
                <i class='fas fa-fast-backward'></i>
              </a>
            </li>
            <li className='page-item'>
              <a
                className='page-link'
                href={
                  page !== 1 &&
                  `?page=${
                    parseInt(page) - 1
                  }&option=${option}&brand=${brand}&min=${min}&max=${max}`
                }
              >
                <i class='fas fa-chevron-left'></i>
              </a>
            </li>

            {page === 1 && (
              <>
                <li className='page-item active'>
                  <a
                    className='page-link'
                    href={`?page=${page}&option=${option}&brand=${brand}&min=${min}&max=${max}`}
                  >
                    1
                  </a>
                </li>

                {counts / 4 > 1 && (
                  <li className='page-item'>
                    <a
                      className='page-link'
                      href={`?page=2&option=${option}&brand=${brand}&min=${min}&max=${max}`}
                    >
                      2
                    </a>
                  </li>
                )}

                {counts / 4 > 2 && (
                  <li className='page-item'>
                    <a
                      className='page-link'
                      href={`?page=3&option=${option}&brand=${brand}&min=${min}&max=${max}`}
                    >
                      3
                    </a>
                  </li>
                )}
              </>
            )}

            {page !== 1 && (
              <>
                <li className='page-item'>
                  <a
                    className='page-link'
                    href={`?page=${
                      page - 1
                    }&option=${option}&brand=${brand}&min=${min}&max=${max}`}
                  >
                    {page - 1}
                  </a>
                </li>

                {counts / 4 > page - 1 && (
                  <li className='page-item active'>
                    <a
                      className='page-link'
                      href={`?page=${page}&option=${option}&brand=${brand}&min=${min}&max=${max}`}
                    >
                      {page}
                    </a>
                  </li>
                )}

                {counts / 4 > page && (
                  <li className='page-item'>
                    <a
                      className='page-link'
                      href={`?page=${
                        page + 1
                      }&option=${option}&brand=${brand}&min=${min}&max=${max}`}
                    >
                      {page + 1}
                    </a>
                  </li>
                )}
              </>
            )}

            <li className='page-item'>
              <a
                className='page-link'
                href={
                  counts / page > 4 &&
                  `?page=${
                    page + 1
                  }&option=${option}&brand=${brand}&min=${min}&max=${max}`
                }
              >
                <i class='fas fa-chevron-right'></i>
              </a>
            </li>
            <li className='page-item'>
              <a
                className='page-link'
                href={
                  counts / page > 4 &&
                  `?page=${Math.ceil(
                    counts / 4
                  )}&option=${option}&brand=${brand}&min=${min}&max=${max}`
                }
              >
                <i class='fas fa-fast-forward'></i>
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  )
}

export default CategoryProducts
