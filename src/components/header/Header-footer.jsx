import React from "react"


function HeaderFooter() {
  return (
    <div className='container d-flex justify-content-between align-items-center header-footer'>
      <div className='categories d-flex justify-content-between align-items-center'>
        <ul className='d-flex'>
          <li>
            <a href='/category/new'>New</a>
          </li>
          <li>
            <a href='/category/clothing?page=1'>Clothing</a>
          </li>
          <li>
            <a href='/category/shoes?page=1'>Shoes</a>
          </li>
          <li>
            <a href='/category/sport?page=1'>Sports</a>
          </li>
          <li>
            <a href='/category/accessories?page=1'>Accesories</a>
          </li>
          <li>
            <a href='/category/bags?page=1'>Bags</a>
          </li>
          <li>
            <a href='' className='sale'>
              Sale %
            </a>
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
