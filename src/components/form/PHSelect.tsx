import { Form, Select } from 'antd'
import { Controller } from 'react-hook-form';

type TOptions ={
    value: string,
    label?: string,
    disabled?: boolean,
}[];
type TSelect = {
    name: string,
    label: string,
    placeholder?: string,
    options: TOptions,
}
const PHSelect = ({name, label, placeholder, options}: TSelect) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: {error} }) => <Form.Item label={label}>
                <Select {...field} placeholder={placeholder} showSearch options={[...options]} size='large'>
                </Select>
                {
                    error && <small style={{fontSize: '15px', fontWeight: '400', color: 'red', marginLeft: 10}}>{error.message}</small>
                }
            </Form.Item>}
        />
    )
}

export default PHSelect
