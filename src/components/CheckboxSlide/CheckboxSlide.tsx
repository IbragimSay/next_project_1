import s from "./CheckboxSlide.module.scss"
export function CheckboxSlide() {
  return (
    <div className={s.wraper}>
        <input id="CheckboxSlide" className={s.wraper__checkbox} type="checkbox" />
        <label className={s.wraper__fake} htmlFor="CheckboxSlide">
          <span className={s.wraper__span}></span>
        </label>
    </div>
  )
}
