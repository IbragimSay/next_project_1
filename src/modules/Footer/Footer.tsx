import s from "./footer.module.scss"


import React from 'react'
export function Footer(){
  return (
    <footer className={s.footer}>
        <a className={s.footer__mail} href="mailto: argen.@mail.ru">argen.@mail.ru</a>
      
    </footer>
  )
}
