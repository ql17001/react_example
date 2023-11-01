'use client'
import useAuthentication from "@/hooks/useAuthentication";
import axios, { isAxiosError } from "axios"
import React, { ChangeEvent } from "react"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { Routes } from "@/util/constants";

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

const [loading, setLoading] = useState(0);

const[email,setemail] = useState('')
const[password, setPassword] = useState('')

const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setemail(event.currentTarget.value);
}
const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
}

const login = async () => {
  try {
    setLoading(previousLoading => previousLoading+1);
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

    router.push(Routes.HOME)
  } catch (error) {
    if(isAxiosError(error)){
      console.log('Error de axios', error);
      alert(error);
    }else{
      console.log('Otro tipo de error', error);
    }
  }
  setLoading(previousLoading => previousLoading-1);
}
return (
        <div>
          <h1>Cargando: {loading > 0 ? 'SÍ' : 'NO'}</h1>
          <div className='flex flex-col'>
          <label htmlFor="firstName">Correo Electronico:</label>
          <input onChange={handleEmailChange} id='firstName' type="text" value={email} />
          </div>
          <div className='flex flex-col'>
          <label htmlFor="firstName">Contraseña:</label>
          <input onChange={handlePasswordChange} id='firstName' type="password" value={password} />
          </div>
          <button onClick={login}>Iniciar Sesion</button>
      </div>
    )   
}

export default LoginPage;