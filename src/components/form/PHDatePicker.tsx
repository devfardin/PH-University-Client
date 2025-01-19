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
            render={({ field }) => <Form.Item>
                <DatePicker className='full_width' aria-label={label} format={format}
                    disabledDate={disablePastYears}   {...field} placeholder={placeholder} size='large' picker={type}/>
            </Form.Item>}
        />
    )
}

export default PHDatePicker
