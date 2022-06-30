import React from 'react'
import cl from "./../Dialogs.module.css"

const MessageItem = (props) => {
    return (
      <div className={cl.message + " " + props.classMessage}>
        <img className={cl.avatar} src={props.profile.avatar} alt="" />
        <div className={cl.text}>
          {props.message} 
        </div>
        
      </div>
    )
  }

export default MessageItem