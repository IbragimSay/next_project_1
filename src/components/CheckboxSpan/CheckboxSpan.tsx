import s from "./CheckboxSpan.module.scss"

export function CheckboxSpan(){
    return(
        <div className={s.wraper}>
        <input className={s.wraper__checkbox} id="CheckboxSpan" type="checkbox" />
        <label className={s.wraper__fake} htmlFor="CheckboxSpan">
            <span className={s.wraper__span}></span>
        </label>
        </div>
    )
}