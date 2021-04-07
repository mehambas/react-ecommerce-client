import React, { useState } from "react"

function ProductDetailImage(images) {
  const [showImage, setShowImage] = useState("")

  function changeImage(e) {
    let src = e.target.src
    setShowImage(src)
  }

  return (
    <>
      <div className='img-big-wrap'>
        <a href='#'>
          <img src={showImage === "" ? images.one : showImage} />
        </a>
      </div>
      <div className='thumbs-wrap'>
        <a
          href='#'
          className='item-thumb'
          style={{ width: "43px" }}
          onMouseOver={changeImage}
        >
          <img src={images.one} />
        </a>
        <a
          href='#'
          className='item-thumb'
          style={{ width: "43px" }}
          onMouseOver={changeImage}
        >
          <img src={images.two} />
        </a>
        <a
          href='#'
          className='item-thumb'
          style={{ width: "43px" }}
          onMouseOver={changeImage}
        >
          <img src={images.three} />
        </a>
        <a
          href='#'
          className='item-thumb'
          style={{ width: "43px" }}
          onMouseOver={changeImage}
        >
          <img src={images.four} />
        </a>
      </div>
    </>
  )
}

export default ProductDetailImage
