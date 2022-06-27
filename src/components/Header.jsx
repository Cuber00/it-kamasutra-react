import React from 'react'

const Header = () => {
    let logoStyle = {
        width: '90px'
      }
    return (
        <header className="header">
            <a href="/" className="logo">
                <img style={logoStyle} src="https://www.nicepng.com/png/full/247-2471411_shipping-methods-fedex-black-and-white.png" alt="" />
            </a>
        </header>
    )
}

export default Header