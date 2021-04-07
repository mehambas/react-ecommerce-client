import React from 'react'
import HeaderTop from "./Header-top";
import HeaderMain from "./Header-main";
import HeaderFooter from "./Header-footer"
import "./header.css"

function Header() {
    return (
        <div className="header-outside">
            <HeaderTop></HeaderTop>
            <HeaderMain/>
            <HeaderFooter/>
        </div>
    )
}

export default Header
