import { Form, Select } from 'antd'
import { Controller } from 'react-hook-form';

type TOptions ={
    value: string,
    label?: string,
    disabled?: boolean,
}[] | undefined;
type TSelect = {
    name: string,
    label: string,
    placeholder?: string,
    options: TOptions,
    disabled?: boolean,
}
const PHSelect = ({name, label, placeholder, options, disabled}: TSelect) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: {error} }) => <Form.Item label={label}>
                <Select {...field} disabled={disabled} placeholder={placeholder} showSearch options={options} size='large'>
                </Select>
                {
                    error && <small style={{fontSize: '15px', fontWeight: '400', color: 'red', marginLeft: 10}}>{error.message}</small>
                }
            </Form.Item>}
        />
    )
}

export default PHSelect
