import React from 'react'
import cl from "./Post.module.css"

const Post = (props) => {
    return (
        <article className={cl.post}>
            <div className={cl.avatar}>
                <img src="https://www.1zoom.ru/big2/946/289597-frederika.jpg" alt="" />
            </div>
            <div className={cl.message}>
                <p>{props.message}</p>
            </div>
        </article>
    )
}

export default Post