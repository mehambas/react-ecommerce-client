import React from "react"
import { Link } from "react-router-dom"

function HeaderFooter() {
  return (
    <div className='container d-flex justify-content-between align-items-center header-footer'>
      <div className='categories d-flex justify-content-between align-items-center'>
        <ul className='d-flex'>
          <li>
            <Link to='/category/new'>New</Link>
          </li>
          <li>
            <Link to='/category/clothing?page=1'>Clothing</Link>
          </li>
          <li>
            <Link to='/category/shoes?page=1'>Shoes</Link>
          </li>
          <li>
            <Link to='/category/sport?page=1'>Sports</Link>
          </li>
          <li>
            <Link to='/category/accessories?page=1'>Accesories</Link>
          </li>
          <li>
            <Link to='/category/bags?page=1'>Bags</Link>
          </li>
          <li>
            <Link to='' className='sale'>
              Sale %
            </Link>
          </li>
        </ul>
      </div>
      <div className='search'>
        <input type='search' name='search-filter' id='search' />
        <button type='submit'>
          <i class='fas fa-search'></i>
        </button>
      </div>
    </div>
  )
}

export default HeaderFooter
