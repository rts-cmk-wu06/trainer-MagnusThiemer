import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from "../components/Button";
import H3 from "../components/H3";
import { useContext } from 'react';
import { StateContext } from '../context/Context';
import { useState } from 'react';

const LoginForm = () => {
  const { userData, setUserData } = useContext(StateContext);
  const schema = yup.object({
    username: yup.string().required('Please enter email'),
    password: yup.string().required('Please enter password')
  }).required()

const navigate = useNavigate()
const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
});
const [loginError, setLoginError] = useState(false)

const onSubmit = () => {
  let myForm = document.getElementById("loginForm");
  let formData = new FormData(myForm);
  fetch("http://localhost:4000/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
  .then(response => response.json())
  .then(data => {
    if(data.token){
      setUserData(data)
      navigate('/home')
    } else {
      setLoginError('Invalid email or password')
    }
  })
  
}

  return ( 
    <div className="mt-16">
      <H3 text='Log in with your credentials'/>
      <form action="POST" onSubmit={handleSubmit(onSubmit)} className="flex p-6 flex-col" id='loginForm'>
        <input 
          {...register('username')}
          type="text"
          className="border-tertiary border py-5 px-10 rounded-full mb-4"
          placeholder='Enter your email...'/>
        <input 
          {...register('password')}
          type="password"
          className="border-tertiary border py-5 px-10 rounded-full mb-4"
          placeholder="Enter your password..."/>
        <Button type='button' text='Sign in'/>
      </form>
    </div>
   );
}
 
export default LoginForm;