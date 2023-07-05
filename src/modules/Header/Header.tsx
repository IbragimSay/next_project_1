import Link from 'next/link'
import React from 'react'
import  s from './header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
        <Link className={s.header__link} href="/">Home</Link>
        <Link className={s.header__link} href="/About">About</Link>
        <Link  className={s.header__link} href='/contacts'>contacts</Link>
    </header>
  )
}

export default Header
