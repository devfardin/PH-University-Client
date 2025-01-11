import { Button } from 'antd';
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
const Login = () => {
  const dispatch = useAppDispatch()
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
  const [login, {error}] = useLoginMutation();
  const onSubmit = async(data:ILoginForm) =>{
   const res = await login(data).unwrap();
   dispatch(setUser({user: {}, token: res.data.accessToken}))
   
  };

  
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
