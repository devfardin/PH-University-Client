import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form'
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUser, TUser, selectCurrentToken, selectCurrentUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'sonner';
const Login = () => {
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectCurrentToken)
  const user = useAppSelector(selectCurrentUser)
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm(
    {
      defaultValues: {
        id: 'F-0001',
        password: 'password123@',
      }
    }
  );
  const [login, { error }] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
   const toastId = toast.loading('Loggin in');
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }))
      toast.success('Logged in', {id: toastId, duration: 1000});
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      const err = error as { data: { message: string } };
      toast.error(`${err.data.message}`, {id: toastId, duration: 1000})
    }
    
  };
  if (token) {
    return <Navigate to={`/${user?.role}/dashboard`} replace={true} />
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
