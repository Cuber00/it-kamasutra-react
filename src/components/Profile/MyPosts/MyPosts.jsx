import React from 'react'
import cl from "./MyPosts.module.css"
import Post from './Post/Post'


const MyPosts = (props) => {
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

            {props.posts.map(p => <Post message={p.post.map(post => (<p>{post}</p>))} key={p.id}/>)}
        </div>
    )
}

export default MyPosts