'use client'
import Link from 'next/link'
import React from 'react'
import  s from './header.module.css'
import { Header_link } from '@/constant/header_link'
import {usePathname} from 'next/navigation'
import classNames from 'classnames'

const Header = () => {
  const pathname = usePathname()
  
  return (
    <header className={s.header}>
        {Header_link.map((item)=>(
          <Link key={item.label} className={classNames(s.header__link, {
            [s.header__link_active]: pathname === item.href 
          })} href={item.href}>{item.label}</Link>
        ))}
    </header>
  )
}

export default Header
