'use client'
import useAuthentication from '@/hooks/useAuthentication';
import { Routes } from '@/utils/constants';
import axios, { isAxiosError } from 'axios'
import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

interface ILoginResponse {
  token: string;
}

interface ILoginBody {
  username: string;
  password: string;
}

interface ICreateUsuarioResponse {
  message: string;
}

interface IUsuarioEntity {
  id: number;
  nombre: string;
  edad: number;
}

interface IUpdateUsuarioResponse {
  message: string;
  data: IUsuarioEntity;
}

const LoginPage = () => {
  const {persistAuthentication} = useAuthentication()

  const router = useRouter()

  const [loading, setloading] = useState(0);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event:ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const handlePasswordChange = (event:ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const login = async () => {
    try {
      setloading(previousLoading => previousLoading+1);
      const response = await axios.post<ILoginResponse>('http://localhost:8000/login', {
        username: email,
        password: password
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      persistAuthentication({token: response.data.token})

      console.log('Se inicio sesion correctamente.')

      router.push(Routes.HOME);
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Error de axios', error);
        alert(error);
      }else{
        console.log('Otro tipo de error', error);
      }
    }
    setloading(previousLoading => previousLoading-1);
  }

  return (
    <div>
      <h1>Cargando: {loading > 0 ? 'Si' : 'No'}</h1>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Corre electronico:</label>
        <input onChange={handleEmailChange} id='firstName' type="text" value={email} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Contraseña:</label>
        <input onChange={handlePasswordChange} id='firstName' type="password" value={password} />
      </div>
      <button onClick={login}>Iniciar sesion</button>
    </div>
  )
}

export default LoginPage