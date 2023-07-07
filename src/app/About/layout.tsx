import Link from "next/link"
import s from './about.module.css'

export default function({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <div className="contener">
            <ul className={s.list}>
                <li className={s.list__item}><Link className={s.list__link} href='/About/name'>Name</Link></li>
                <li className={s.list__item}> <Link className={s.list__link} href='/About/age'>Age</Link></li>
            </ul>
            {children}
        </div>
    )
}