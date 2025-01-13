import { Button } from 'antd';
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUser, useCurrentToken, useCurrentUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'sonner';
const Login = () => {
  const dispatch = useAppDispatch()
  const token = useAppSelector(useCurrentToken)
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm(
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
  const [login, { error }] = useLoginMutation();
  const onSubmit = async (data: ILoginForm) => {
    const res = await login(data).unwrap();
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }))
    navigate(`/${user.role}/dashboard`);
    toast('Login Success');
    
  };
  if (token) {
    return <Navigate to={`/`} replace={true} />
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20, height: '100vh' }}>
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
