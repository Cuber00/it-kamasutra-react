import React from 'react'
import cl from "./Dialogs.module.css"
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
  return (
    <div className={cl.dialog}>
      <NavLink
        to={`/dialogs/${props.id}`}
        className={({ isActive }) => isActive ? cl.active : ""}
      >
        {props.name}
      </NavLink>
    </div>
  )
}

const MessageItem = (props) => {
  return (
    <div className={cl.message + " " + props.classMessage}>
      {props.message}
    </div>
  )
}

const Dialogs = () => {
  return (
    <div className={cl.dialogsWrapper}>
      <h2 className={cl.title}>Dialogs</h2>
      <div className={cl.dialogs}>
        <DialogItem id="1" name="Sveta" />
        <DialogItem id="2" name="Tanya" />
        <DialogItem id="3" name="Tolya" />
        <DialogItem id="4" name="Andrey" />
        <DialogItem id="5" name="Vasya" />
        <DialogItem id="6" name="Slava" />
      </div>
      <div className={cl.messages}>
        <MessageItem classMessage="" message="Hi" />
        <MessageItem classMessage={cl.received} message="How are you?" />
        <MessageItem classMessage="" message="Lorem ipsum" />
        <MessageItem classMessage={cl.received} message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti magni eos tempora praesentium culpa consequatur eligendi enim, officia debitis? Repellendus?" /> 
      </div>
    </div>
  )
}

export default Dialogs