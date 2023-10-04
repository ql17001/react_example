'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import customAxios from '@/utils/customAxios';
import axios, { AxiosResponse, isAxiosError } from 'axios'
import React, { useEffect, useState } from 'react'

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

const Example5 = () => {
  const [storeToken, retrieveToken, removeToken] = useLocalStorage<string>('token');

  const createUsuario = async () => {
    try {
      const response = await customAxios.post<ICreateUsuarioResponse>('/usuario', {
        nombre: "Juan",
        edad: 24
      },
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(response.data.message)
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Error de axios', error)
      }else{
        console.log('Otro error', error)
      }
    }
  }

  const updateUsuario = async () => {
    try {
      const response = await customAxios.put<IUpdateUsuarioResponse>('/usuario/1', {
        nombre: "Ricardo",
        edad: 45
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      console.log('Message:', response.data.message)

      console.log('Data:', response.data.data)
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Error de axios', error)
      }else{
        console.log('Otro error', error)
      }
    }
  }

  const getUsuario = async () => {
    try {
      const response = await customAxios.get<IUsuarioEntity>('/usuario/1');
      console.log('Usuario con id 1:', response.data)
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Error de axios', error)
      }else{
        console.log('Otro error', error)
      }
    }
  }

  const getAllUsuarios = async () => {
    try {
      const response = await customAxios.get<IUsuarioEntity[]>('/usuario');
      console.log('Usuarios:', response.data)
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Error de axios', error)
      }else{
        console.log('Otro error', error)
      }
    }
  }

  const deleteUsuario = async () => {
    try {
      const response = await customAxios.delete<IUpdateUsuarioResponse>('/usuario/1');
      console.log('Message:', response.data.message);
      console.log('Data:', response.data.data);
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Error de axios', error)
      }else{
        console.log('Otro error', error)
      }
    }
  }

  useEffect(
    () => {
      const login = async () => {
        try {
          const response = await axios.post<ILoginResponse, AxiosResponse<ILoginResponse>, ILoginBody>('http://localhost:8000/login', {
            username: 'ql17001@ues.edu.sv',
            password: '123456'
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          });
          
          storeToken(response.data.token);

          console.log('Se inicio sesion correctamente.')
        } catch (error) {
          if(isAxiosError(error)){
            console.log('Error de axios', error);
          }else{
            console.log('Otro tipo de error', error);
          }
        }
      }

      login();
    }, [storeToken]
  )


  return (
    <div>
      <h1 className='text-2xl font-bold'>Peticiones a API</h1>
      <h2 className='text-lg font-bold'>Metodos HTTP</h2>
      <div className='flex flex-row gap-2'>
        <button title='Endpoint para actualizar usuario' onClick={createUsuario}>POST</button>
        <button title='Endpoint para leer todos los usuario' onClick={updateUsuario}>PUT</button>
        <button title='Endpoint leer un solo usuario' onClick={getUsuario}>GET 1</button>
        <button title='Endpoint leer todos los usuarios' onClick={getAllUsuarios}>GET 2</button>
        <button title='Endpoint eliminar un usuario' onClick={deleteUsuario}>DELETE</button>
      </div>
    </div>
  )
}

export default Example5