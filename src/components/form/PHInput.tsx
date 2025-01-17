import { Input } from 'antd'
import { Controller } from 'react-hook-form'
type TInputProps = {
    name: string;
    label: string;
    type: string;
}
const PHInput = ({name, label, type}: TInputProps) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 5,}}>
      <label style={{fontSize: 18, fontWeight: 700,}} htmlFor={name}>{label}</label>
       <Controller
       name={name}
       render={({field}) => <Input {...field} type={type} id={name}/>}
       />
    </div>
  )
}

export default PHInput
