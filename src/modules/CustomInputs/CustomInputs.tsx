import { Input } from "@/components";


export function CustomInputs(){
    return(
        <div>
            <Input custom={true} placeholder="neme" />
            <Input custom={false}  placeholder="addres" />
        </div>
    )
}