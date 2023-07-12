import { ComponentProps } from "react";

export interface InputProps extends ComponentProps<'input'>{
    placeholder: string,
    custom: boolean
}