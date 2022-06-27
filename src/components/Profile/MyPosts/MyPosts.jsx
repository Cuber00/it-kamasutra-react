import React from 'react'
import cl from "./MyPosts.module.css"
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={cl.posts}>

            <div className={cl.my_post}>
                <h3>My posts</h3>
                <form className={cl.form_post}>
                    <textarea name="new-post">
                        Your news...
                    </textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>

            <Post message="Hi, how are you?" />
            <Post message="It's my first post" />
        </div>
    )
}

export default MyPosts