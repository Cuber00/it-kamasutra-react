import React from 'react'
import { NavLink } from "react-router-dom"
import cl from "./../Dialogs.module.css"


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
export default DialogItem