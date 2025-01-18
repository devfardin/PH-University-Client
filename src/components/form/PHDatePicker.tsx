import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';

type TSelect = {
    name: string,
    label?: string,
    placeholder?: string,
}
const PHDatePicker = ({ name, placeholder }: TSelect) => {
    
    const disablePastYears = (current) => {
        return current && current.year() < new Date().getFullYear();
    };



    return (
        <Controller
            name={name}
            render={({ field }) => <Form.Item>
                <DatePicker
                    disabledDate={disablePastYears}   {...field} placeholder={placeholder} size='large' picker="year" />
            </Form.Item>}
        />
    )
}

export default PHDatePicker
