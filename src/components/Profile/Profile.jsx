import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import cl from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={cl.profile_wrapper}>
      <img className={cl.bgImg} src="https://www.alladvertising.ru/porridge/83/101/h_5190dfb41642e7d30b11a33ebe0f4883" alt="" />

      <div className={cl.profile}>
        <div className={cl.avatar}>
          <img src="https://www.1zoom.ru/big2/946/289597-frederika.jpg" alt="" />
        </div>
        <div className={cl["profile-content"]}>
          <h2 className={cl.name}>Dmitry K.</h2>
          <div>Date of Birth: 2 january</div>
          <div>City: Tomsk</div>
          <div>Education: BSU'11</div>
          <div>Web site: </div>
        </div>

      </div>

      <MyPosts />
    </div>
  )
}

export default Profile