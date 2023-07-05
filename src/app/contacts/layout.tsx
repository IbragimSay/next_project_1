import Link from "next/link"
import s from './contact.module.css'

export default function({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <div className="contener">
            <ul className={s.list}>
                <li className={s.list__item}><Link className={s.list__link} href='/contacts/mail'> mail</Link></li>
                <li className={s.list__item}><Link className={s.list__link} href='/contacts/number'>number</Link></li>
            </ul>
            {children}
        </div>
    )
}