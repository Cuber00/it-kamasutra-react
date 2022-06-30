import React from "react"
import FriendCard from "./FriendCard/FriendCard"
import cl from "./FriendsMap.module.css"
const FriendsMap = (props) => {
    return (
        <div className={cl.friends}>
            <h3>Friends</h3>
            <div className={cl.content}>
                {props.friends.map(f => <FriendCard url={f.avatar} name={f.name} id={f.id} key={f.id}/>)}
            </div>
            
        </div>
    )
}

export default FriendsMap