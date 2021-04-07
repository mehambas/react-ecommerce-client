import React from 'react'
import Header from "./header/Header"
import Footer from "./footer/Footer"
import ShoppingCardHeader from './shopping-card-page/ShoppingCardHeader'
import ShoppingCardList from './shopping-card-page/ShoppingCardList'
import ShoppingCardTotal from './shopping-card-page/ShoppingCardTotal'
import ShoppingCardInfo from './shopping-card-page/ShoppingCardInfo'

function ShoppingCardPage() {
    return (
        <>
            <Header />
            <ShoppingCardHeader />
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <ShoppingCardList />
                        <ShoppingCardTotal />
                    </div>
                </div>
            </section>
            <ShoppingCardInfo />
            <Footer />
        </>
    )
}

export default ShoppingCardPage
