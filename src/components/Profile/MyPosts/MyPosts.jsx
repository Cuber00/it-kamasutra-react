import React from 'react'
import cl from "./MyPosts.module.css"
import Post from './Post/Post'


const MyPosts = (props) => {

    let addNewPost = React.createRef();

    const setAddNewPost = (event) => {
        event.preventDefault()
        props.addPost()
    }

    const fun = () => {
        
        const text = addNewPost.current.value;
        console.log(props.setChangeTextarea)
        props.setChangeTextarea(text);
    }

    return (
        <div className={cl.posts}>

            <div className={cl.my_post}>
                <h3>My posts</h3>
                <form className={cl.form_post}>
                    <textarea name="new-post"
                        ref={addNewPost}
                        onChange={fun}
                        value={props.profilePage.newValueText}
                    >
                        Your news...
                    </textarea>
                    <input type="submit" value="Send" onClick={setAddNewPost} />
                </form>
            </div>

            {props.profilePage.postsJSON.map(p => <Post message={p.post.map((post, index) => (<p key={index}>{post}</p>))} key={p.id} />)}
        </div>
    )
}

export default MyPosts