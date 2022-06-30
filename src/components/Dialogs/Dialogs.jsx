import React from 'react'
import cl from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import MessageItem from "./MessageItem/MessageItem"


const Dialogs = (props) => {
  return (
    <div className={cl.dialogsWrapper}>
      <h2 className={cl.title}>Dialogs</h2>
      <div className={cl.dialogs}>
        {props.dialogJSON.map(d => <DialogItem id={d.id} name={d.name} key={d.id} />)}
      </div>
      <div className={cl.messages}>
        {props.messageJSON.map(m => <MessageItem classMessage={cl[m.class]} message={m.message} key={m.id} />)}
      </div>
    </div>
  )
}

export default Dialogs