
import { CheckboxSlide, CheckboxSpan } from "@/components";
import { Acardion, CustomCheckBox, CustomInputs } from "@/modules";

export default function Home() {


      return (
        <div className="contener" >
          <Acardion/>
          <CustomInputs />
          <CustomCheckBox />
          <CheckboxSpan />
          <CheckboxSlide />

          
        </div>
      )
    }