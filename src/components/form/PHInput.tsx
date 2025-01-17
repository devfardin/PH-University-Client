import { Form, Input } from 'antd'
import { Controller } from 'react-hook-form'
type TInputProps = {
    name: string;
    label: string;
    type: string;
}
const PHInput = ({name, label, type}: TInputProps) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 5,}}>
       <Controller
       name={name}
       render={({field}) => <Form.Item rules={[{required: true}]} label={label}>
         <Input {...field} type={type} id={name}/> 
        </Form.Item> }
       />
    </div>
  )
}

export default PHInput
