import { Button } from 'antd';
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../redux/features/auth/authApi';
const Login = () => {
  const {register, handleSubmit} = useForm(
    {
      defaultValues: {
        id: 'F-0001',
        password: 'password123@',
      }
    }
  );
  interface ILoginForm {
    id: string,
    password: string,
  }
  const [login, {data, error}] = useLoginMutation();
  const onSubmit = (data:ILoginForm) =>{
    login(data);
  };
  if(data) {
    console.log(data);
  }
  if(error) {
    console.log(error);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='id'>ID:</label>
        <input type="text" id='id' {...register("id")} />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input type="text" id='password' {...register('password')} />
      </div>
      <Button htmlType='submit'>Login</Button>
    </form>
  )
}

export default Login
