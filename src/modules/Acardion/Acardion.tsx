'use client'
import classNames from 'classnames'
import s from './Acardion.module.scss'
import { useState } from 'react'



export function Acardion(){
    const [data, setData]= useState([
        {id: 1,
          text: 'tab 1 Argen Ibragim',
          isActive: false
        },
        {id: 2,
          text: 'tab 2 Argen Ibragim',
          isActive: false
        },
        {id: 3,
          text: 'tab 3 Argen Ibragim',
          isActive: false
        }
        
      ])
  
  
      const ActivClick =(curent: any) =>{
        setData(data.map(item=>{
          if(item.id == curent.id){
            item.isActive = !item.isActive
          }else{
            item.isActive = false
          }
          return item
        }))
  
      }
  
  
  return (
    <div className="contener">
    <h1>home</h1>
    {data.map((item)=>(
      <div key={item.id}>
        <h1 onClick={()=>ActivClick(item)} className={s.list__title}>{item.id}</h1>
        <h2 className={classNames(s.list__text, {
          [s.list__text_active]: item.isActive
        })}>{item.text}</h2>
      </div>
    ))}

  </div>
  )
}

