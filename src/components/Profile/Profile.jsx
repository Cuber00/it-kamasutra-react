import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import cl from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className={cl.wrapper}>
      <img className={cl.bgImg} src="https://www.alladvertising.ru/porridge/83/101/h_5190dfb41642e7d30b11a33ebe0f4883" alt="" />

      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile