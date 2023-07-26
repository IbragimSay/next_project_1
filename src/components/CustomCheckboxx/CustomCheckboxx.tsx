import React from 'react'
import s from "./CustomCheckboxx.module.scss"

export function CustomCheckboxx(){
  return (
    <div className={s.wraper}>
      <input className={s.wraper__checkbox}  id='checbox1' type="checkbox" />
      <label className={s.wraper__fake} htmlFor="checbox1"></label>
    </div>
  )
}
