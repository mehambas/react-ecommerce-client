import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./index.css"
import Homepage from "./components/Homepage"
import ProductPage from "./components/ProductPage"
import CategoryPage from "./components/CategoryPage"
import ShoppingCardPage from "./components/ShoppingCardPage"
import RegisterPage from "./components/RegisterPage"
import SignInPage from "./components/SignInPage"


ReactDOM.render(
  <Router>
    <Route exact path='/'>
      <Homepage />
    </Route>
    <Route path='/products/:id'>
      <ProductPage />
    </Route>
    <Route path='/category/:category_url'>
      <CategoryPage />
    </Route>
    <Route path='/shoplist'>
      <ShoppingCardPage />
    </Route>
    <Route path='/register'>
      <RegisterPage />
    </Route>
    <Route path='/signin'>
      <SignInPage />
    </Route>
  </Router>,
  document.getElementById("root")
)
