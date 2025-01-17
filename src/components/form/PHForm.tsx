
import { Form } from 'antd';
import { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form'

type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
} & TFromConfig;
type TFromConfig = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValues?: Record<string, any>
}
const PHForm = ({onSubmit, children, defaultValues}: TFormProps) => {
    const formConfig: TFromConfig = {};

    if(defaultValues){
        formConfig['defaultValues'] = defaultValues;
    }

    const methods = useForm<TFormProps>(formConfig);
    
  return (
    <FormProvider {...methods}>
    <Form layout='vertical' onFinish={methods.handleSubmit(onSubmit)}>
        { children }
    </Form>
    </FormProvider>
  )
}

export default PHForm
