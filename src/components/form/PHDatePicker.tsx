import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';

type TSelect = {
    name: string,
    label?: string,
    placeholder?: string,
    type: 'date' | 'week' | 'month' | 'quarter' | 'year',
    format?: string,
}
const PHDatePicker = ({ name, placeholder, label, type, format }: TSelect) => {
    const disablePastYears = (current: { year: () => number; }) => {
        return current && current.year() < new Date().getFullYear();
    };
    return (
        <Controller
            name={name}
            render={({ field, fieldState: {error} }) => <Form.Item rules={[{required: true}]} label={label}>
                <DatePicker className='full_width' 
                 format={format}
                    disabledDate={disablePastYears}   {...field} placeholder={placeholder} size='large' picker={type}/>
                    {
                        error && <small>{error.message}</small>
                    }
            </Form.Item>}
        />
    )
}

export default PHDatePicker
