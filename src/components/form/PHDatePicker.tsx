import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';

type TSelect = {
    name: string,
    label?: string,
    placeholder?: string,
}
const PHDatePicker = ({ name, placeholder }: TSelect) => {
    
    const disablePastYears = (current: { year: () => number; }) => {
        return current && current.year() < new Date().getFullYear();
    };


    return (
        <Controller
            name={name}
            render={({ field }) => <Form.Item>
                <DatePicker className='full_width'
                    disabledDate={disablePastYears}   {...field} placeholder={placeholder} size='large' picker="year" />
            </Form.Item>}
        />
    )
}

export default PHDatePicker
