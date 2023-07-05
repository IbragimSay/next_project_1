'use client'
import classNames from 'classnames'
import s from './home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


export default function Home() {

  const [data, setData]= useState([
    {id: 1,
      text: 'fdsklm jsfklajdlkf mfsklm',
      isActive: false
    },
    {id: 2,
      text: 'fdsklm jsfklajdlkf mfsklm',
      isActive: false
    },
    {id: 3,
      text: 'fdsklm jsfklajdlkf mfsklm',
      isActive: false
    }
  ])

  const ActivClick=(current: any)=>{
    setData(data.map((item)=>{
      if(current.id == item.id){
        item.isActive = !item.isActive
      }
      return item
    }))
  }

  return (
    <div className="contener">
      <h1>home</h1>
      <div className={s.list}>
        {data.map((item, index)=>(
          <div  className={s.list__item} key={item.id}>
            <h2 onClick={()=>{ActivClick(item)}} className={s.list__title}>{index + 1}</h2>
            <div className={classNames(s.list__text, {
              [s.list__text_active]: item.isActive
            })}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
