import Link from "next/link"
import s from "./contact.module.css"
import { Contacts_link } from "@/constant/header_link"

export default function({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <div className="contener">
            <ul className={s.list}>
              {Contacts_link.map(item=>(
                <li className={s.list__item}><Link className={s.list__link} href={item.href}>{item.labe}</Link></li>
              ))}
                
            </ul>
            {children}
        </div>
    )
}