import classNames from "classnames"
import s from "./input.module.scss"
import { InputProps } from "./input.type"

export function Input({custom, ...props}: InputProps){
    return(
        <div className={s.wrapper}>
            <input {...props} placeholder={custom ? " " : props.placeholder} className={classNames(s.wrapper__input_none, {
                [s.wrapper__input_custom]: custom
            })} type="text" />
            {custom ? <span  className={s.wrapper__span}>{props.placeholder}</span> : null}
        </div>
    )
}