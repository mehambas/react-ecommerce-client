import React, { useState, useEffect } from "react"
import Card from "../new-arrivals/Card"
import axios from "axios"

function CardGroup({ name, name2, name3, name4, name5 }) {
  // UseStates
  const [clothings, setClothings] = useState([])
  const [shoes, setShoes] = useState([])
  const [accessiories, setAccessiories] = useState([])
  const [bags, setBags] = useState([])
  const [sports, setSports] = useState([])

  // Functions
  function getClothings() {
    axios
      .get(
        "https://react-ecommerce-devshop.herokuapp.com/api/featuredproducts/clothing"
      )
      .then((results) => {
        setClothings(results.data)
      })
  }

  function getShoes() {
    axios
      .get(
        "https://react-ecommerce-devshop.herokuapp.com/api/featuredproducts/shoes"
      )
      .then((results) => {
        setShoes(results.data)
      })
  }

  function getAccessiories() {
    axios
      .get(
        "https://react-ecommerce-devshop.herokuapp.com/api/featuredproducts/accessories"
      )
      .then((results) => {
        setAccessiories(results.data)
      })
  }

  function getBags() {
    axios
      .get(
        "https://react-ecommerce-devshop.herokuapp.com/api/featuredproducts/bags"
      )
      .then((results) => {
        setBags(results.data)
      })
  }

  function getSports() {
    axios
      .get(
        "https://react-ecommerce-devshop.herokuapp.com/api/featuredproducts/sport"
      )
      .then((results) => {
        setSports(results.data)
      })
  }

  //useEffects
  useEffect(getClothings, [])
  useEffect(getShoes, [])
  useEffect(getAccessiories, [])
  useEffect(getBags, [])
  useEffect(getSports, [])

  return (
    <>
      <div className='featured-header d-flex justify-content-between mt-5'>
        <span className='featured-header-left'>{name}</span>
        <span className='featured-header-right'>
          <Link to=''>Wiew All</a>
        </span>
      </div>
      <div className='row cards d-flex justify-content-between'>
        {clothings.map((clothing) => {
          return (
            <Card
              key={clothing._id}
              {...clothing}
              images={clothing.images.one}
              point={clothing.star.point}
              count={clothing.star.count}
            />
          )
        })}
      </div>

      <div className='featured-header d-flex justify-content-between mt-5'>
        <span className='featured-header-left'>{name2}</span>
        <span className='featured-header-right'>
          <Link to=''>Wiew All</a>
        </span>
      </div>
      <div className='row cards d-flex justify-content-between'>
        {shoes.map((shoe) => {
          return (
            <Card
              key={shoe._id}
              {...shoe}
              images={shoe.images.one}
              point={shoe.star.point}
              count={shoe.star.count}
            />
          )
        })}
      </div>

      <div className='featured-header d-flex justify-content-between mt-5'>
        <span className='featured-header-left'>{name3}</span>
        <span className='featured-header-right'>
          <Link to=''>Wiew All</a>
        </span>
      </div>
      <div className='row cards d-flex justify-content-between'>
        {accessiories.map((accessiorie) => {
          return (
            <Card
              key={accessiorie._id}
              {...accessiorie}
              images={accessiorie.images.one}
              point={accessiorie.star.point}
              count={accessiorie.star.count}
            />
          )
        })}
      </div>

      <div className='featured-header d-flex justify-content-between mt-5'>
        <span className='featured-header-left'>{name4}</span>
        <span className='featured-header-right'>
          <Link to=''>Wiew All</a>
        </span>
      </div>
      <div className='row cards d-flex justify-content-between'>
        {bags.map((bag) => {
          return (
            <Card
              key={bag._id}
              {...bag}
              images={bag.images.one}
              point={bag.star.point}
              count={bag.star.count}
            />
          )
        })}
      </div>

      <div className='featured-header d-flex justify-content-between mt-5'>
        <span className='featured-header-left'>{name5}</span>
        <span className='featured-header-right'>
          <Link to=''>Wiew All</a>
        </span>
      </div>
      <div className='row cards d-flex justify-content-between'>
        {sports.map((sport) => {
          return (
            <Card
              key={sport._id}
              {...sport}
              images={sport.images.one}
              point={sport.star.point}
              count={sport.star.count}
            />
          )
        })}
      </div>
    </>
  )
}

export default CardGroup
