import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form'
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUser, TUser, selectCurrentToken, selectCurrentUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'sonner';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';
const Login = () => {
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectCurrentToken)
  const user = useAppSelector(selectCurrentUser)
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm(
    {
      defaultValues: {
        id: 'A-0001',
        password: 'password123@',
      }
    }
  );
  const [login, { error }] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
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
    <PHForm onSubmit={onSubmit}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20, height: '100vh' }}>
          <PHInput name={'id'} label={'ID'} type={'text'}/>
          <PHInput  type="text" name='password' label='Password'/>
        <Button htmlType='submit'>Login</Button>
      </div>
    </PHForm>
  )
}

export default Login
