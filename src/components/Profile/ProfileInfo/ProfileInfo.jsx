import React from 'react'
import cl from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
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
    )
}

export default ProfileInfo