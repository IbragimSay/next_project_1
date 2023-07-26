'use client'
import React, { useState } from "react"
import s from './checkBox.module.scss'
import classNames from "classnames"
export function CheckBoxState(){
    const [isActiv, setIsActiv] = useState(false)
    console.log(isActiv)
    const isActivToggle = ()=>{
      setIsActiv(!isActiv)
    }
  return (
    <div>
      <div onClick={()=>isActivToggle()} className={s.checkBox}>
        <div  onClick={()=>isActivToggle()} className={classNames(null, {
          [s.checkBox__active]: isActiv
        })}>
        </div>
      </div>
      </div>
  )
}

