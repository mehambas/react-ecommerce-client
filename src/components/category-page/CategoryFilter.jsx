import React, { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import axios from "axios"

function CategoryFilter() {
  const query = new URLSearchParams(useLocation().search)
  const option =
    query.get("option") === null ? "latestitems" : query.get("option")
  const brand = query.get("brand") === null ? [] : query.get("brand")
  const min = query.get("min") === null ? 0 : query.get("min")
  const max = query.get("max") === null ? 999999 : query.get("max")

  const [minPrice, setMinPrice] = useState(min)
  const [maxPrice, setMaxPrice] = useState(max)

  function changeMinPrice(e) {
    setMinPrice(e.target.value)
  }

  function changeMaxPrice(e) {
    setMaxPrice(e.target.value)
  }

  const params = useParams()
  let tempArr = []
  if (brand !== [] && brand.length > 0) {
    tempArr = brand.split(",")
  }

  const [selectedBrands, setSelectedBrands] = useState(tempArr)

  function brandChange(e) {
    let index = 0
    const brands = selectedBrands
    if (e.target.checked) {
      brands.push(e.target.value)
    } else {
      index = brands.indexOf(e.target.value)
      brands.splice(index, 1)
    }
    setSelectedBrands(brands)
  }

  function applyFilter(e) {
    let adress = `http://localhost:3000/category/${params.category_url}?page=1&option=${option}&brand=${selectedBrands}&min=${minPrice}&max=${maxPrice}`
    window.location.href = adress

    e.preventDefault()
  }

  const [brands, setBrands] = useState([])

  function getBrands() {
    let adress = `http://localhost:3001/api/category/filter/brand/${params.category_url}`
    axios.get(adress).then((results) => {
      setBrands(results.data)
    })
  }
  console.log(brands)

  useEffect(getBrands, [])

  return (
    <aside className='col-md-3'>
      <form onSubmit={applyFilter}>
        <div className='card'>
          <article className='filter-group'>
            <header className='card-header'>
              <a
                href='#'
                data-toggle='collapse'
                data-target='#collapse_2'
                aria-expanded='true'
                className=''
              >
                <i className='icon-control fa fa-chevron-down'></i>
                <h6 className='title'>Brands </h6>
              </a>
            </header>
            <div className='filter-content collapse show' id='collapse_2'>
              <div className='card-body'>
                {brands.map((brand, index) => {
                  return (
                    <label className='custom-control custom-checkbox'>
                      <input
                        key={index}
                        defaultChecked={
                          selectedBrands.includes(brand) ? true : false
                        }
                        type='checkbox'
                        className='custom-control-input'
                        value={brand}
                        onChange={brandChange}
                      />
                      <div className='custom-control-label'>{brand}</div>
                    </label>
                  )
                })}
              </div>
            </div>
          </article>
          <article className='filter-group'>
            <header className='card-header'>
              <a
                href='#'
                data-toggle='collapse'
                data-target='#collapse_3'
                aria-expanded='true'
                className=''
              >
                <i className='icon-control fa fa-chevron-down'></i>
                <h6 className='title'>Price range </h6>
              </a>
            </header>
            <div className='filter-content collapse show' id='collapse_3'>
              <div className='card-body'>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label>Min</label>
                    <input
                      defaultValue={min}
                      onChange={changeMinPrice}
                      className='form-control'
                      placeholder='€0'
                      type='number'
                    />
                  </div>
                  <div className='form-group text-right col-md-6'>
                    <label>Max</label>
                    <input
                      defaultValue={max}
                      onChange={changeMaxPrice}
                      className='form-control'
                      placeholder='€1,0000'
                      type='number'
                    />
                  </div>
                </div>
                <button type='submit' className='btn btn-block btn-primary'>
                  Apply
                </button>
              </div>
            </div>
          </article>
          {/* <article className='filter-group'>
          <header className='card-header'>
            <a
              href='#'
              data-toggle='collapse'
              data-target='#collapse_4'
              aria-expanded='true'
              className=''
            >
              <i className='icon-control fa fa-chevron-down'></i>
              <h6 className='title'>Sizes </h6>
            </a>
          </header>
          <div className='filter-content collapse show' id='collapse_4'>
            <div className='card-body'>
              <label className='checkbox-btn'>
                <input type='checkbox' />
                <span className='btn btn-light'> S </span>
              </label>

              <label className='checkbox-btn'>
                <input type='checkbox' />
                <span className='btn btn-light'> M </span>
              </label>

              <label className='checkbox-btn'>
                <input type='checkbox' />
                <span className='btn btn-light'> L </span>
              </label>

              <label className='checkbox-btn'>
                <input type='checkbox' />
                <span className='btn btn-light'> XL </span>
              </label>
            </div>
          </div>
        </article> */}
        </div>
      </form>
    </aside>
  )
}

export default CategoryFilter
