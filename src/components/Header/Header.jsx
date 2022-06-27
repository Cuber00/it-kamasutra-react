import React from 'react'
import cl from './Header.module.css'

const Header = () => {
    let logoStyle = {
        width: '90px'
      }
    return (
        <header className={cl.header}>
            <a href="/">
                <img style={logoStyle} src="https://www.nicepng.com/png/full/247-2471411_shipping-methods-fedex-black-and-white.png" alt="" />
            </a>
        </header>
    )
}

export default Header