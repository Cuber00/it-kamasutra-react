import React from 'react'
import cl from "./../Dialogs.module.css"

const MessageItem = (props) => {
    return (
      <div className={cl.message + " " + props.classMessage}>
        {props.message}
      </div>
    )
  }

export default MessageItem