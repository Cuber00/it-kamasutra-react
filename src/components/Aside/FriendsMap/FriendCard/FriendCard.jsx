import React from "react"
import cl from "./FriendCard.module.css"
import { NavLink } from "react-router-dom"
const FriendCard = (props) => {
    return (
        <NavLink to={`/profile/${props.id}`}>
            <article className={cl.friendCard}>
                <img className={cl.avatar} src={props.url} alt="" />
                <div className={cl.name}>{props.name}</div>
            </article>
        </NavLink>

    )
}

export default FriendCard