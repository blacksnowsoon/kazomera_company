import { useController, useFormState } from "react-hook-form";  
// this controller aproach works with inputs text and checkbox

export default function ControllerField ({control, name, rules, render}) {
  
  const { field, fieldState } = useController({ control, name, rules})
  const { errors } = useFormState({control, name})

  return render ({
    errors,
    fieldState,
    onBlur: (e) => field.onBlur(e),
    onChange: (e) => {
      console.log(e)
      if (typeof e !== 'string' &&  e?.target.ariaChecked) {
        return field.onChange({
          target: {
            name,
            value: e.target.checked
          }
        })
      } else if (typeof e === 'string'){ 
        return field.onChange({
          target: {
            name,
            value: e
          }
        })
      } else {
        return field.onChange({
          target: {
            name,
            value: e.target.value
          }
        })
      }
    },
    name: field.name,
    inputRef: field.ref
  })
}