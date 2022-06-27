import React from 'react'
import cl from './Aside.module.css'

const Aside = () => {
    return (
        <aside className={cl.aside}>
            <nav className={cl.nav}>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Message</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Aside