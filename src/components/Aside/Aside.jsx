import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from './Aside.module.css'
import FriendsMap from './FriendsMap/FriendsMap'


const Aside = (props) => {
    return (
        <aside className={cl.aside}>
            <nav className={cl.nav}>
                <ul>

                    <li>
                        <NavLink
                            to="/profile"
                            className={newData => newData.isActive ? cl.active : cl.item}
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dialogs"
                            className={newData => newData.isActive ? cl.active : cl.item}
                        >
                            Message
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/news"
                            className={newData => newData.isActive ? cl.active : cl.item}
                        >
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/music"
                            className={newData => newData.isActive ? cl.active : cl.item}
                        >
                            Music
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <FriendsMap friends={props.friends.friends}/>
        </aside>
    )
}

export default Aside