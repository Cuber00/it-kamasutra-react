import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import cl from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'



const Profile = (props) => {
  return (
    <div className={cl.wrapper}>
      <img className={cl.bgImg} src="https://www.alladvertising.ru/porridge/83/101/h_5190dfb41642e7d30b11a33ebe0f4883" alt="" />

      <ProfileInfo />
      <MyPosts posts={props.postsJSON} addPost={props.addPost} setChangeTextarea={props.setChangeTextarea}/>
    </div>
  )
}

export default Profile