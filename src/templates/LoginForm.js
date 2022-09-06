import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";
import H3 from "../components/H3";
import { useContext } from 'react';
import { StateContext } from '../context/Context';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const { setUserToken } = useContext(StateContext);
  const schema = yup.object({
    username: yup.string().required('Please enter username'),
    password: yup.string().required('Please enter password')
  }).required()

const navigate = useNavigate()
const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
});
const [loginError, setLoginError] = useState(false)
const config = {
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
};

const onSubmit = () => {
  setLoginError(false)
  let loginForm = document.getElementById("loginForm");
  let formData = new FormData(loginForm);

  axios.post(`http://localhost:4000/auth/token`, formData, config)
  .then((response) => {
    if(response.data.token){
      setUserToken(response.data)
      navigate('/home')
    }})
  .catch(() => setLoginError('Invalid user or password'))
}

  return ( 
    <div className="mt-16 p-6">
      <H3 text='Log in with your credentials'/>
      <form action="POST" onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-6" id='loginForm'>
        {errors.username && <p>{errors.username.message}</p>}
        <input 
          {...register('username')}
          type="text"
          className="border-tertiary border py-5 px-10 rounded-full mb-4"
          placeholder='Enter your username...'/>
        {errors.password && <p>{errors.password.message}</p>}
        <input 
          {...register('password')}
          type="password"
          className="border-tertiary border py-5 px-10 rounded-full mb-4"
          placeholder="Enter your password..."/>
        <Button type='button' text='Sign in'/>
        {loginError && <p className='text-center pt-4'>{loginError}</p>}
      </form>
    </div>
   );
}
 
export default LoginForm;