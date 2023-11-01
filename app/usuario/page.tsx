'use client'
import React, { use, useCallback, useState } from 'react';
import { useEffect } from 'react';
import customAxios from '@/util/customAxios';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';


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


const UsuariosPage = () => {
    const router = useRouter();
    const[users, setUsers] = useState<IUsuarioEntity[]>([])
    
        const getAllUsuarios = useCallback( async () => {
            try {
              const response = await customAxios.get<IUsuarioEntity[]>('/usuario');
              console.log('Usuarios:', response.data)
              setUsers(response.data)
            } catch (error) {
              if(isAxiosError(error)){
                console.log('Error de axios', error)
              }else{
                console.log('Otro error', error)
              }
            }
          },[]) 

          useEffect (() => {
          getAllUsuarios();
        },[getAllUsuarios])

        const deleteUsuario = async (id:number) => {
            try {
              await customAxios.delete<IUpdateUsuarioResponse>('/usuario/$(id)');

              getAllUsuarios();
            } catch (error) {
              if(isAxiosError(error)){
                console.log('Error de axios', error)
              }else{
                console.log('Otro error', error)
              }
            }
          }

        return(
            <div>
    <table>
        <thead>    
        <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
        </tr>
        </thead>
    <tbody>
     {users.map((user) => {

    const editar = () => {
        router.push('/usuarios/${user.id}')
    }

    const eliminar = () => {
      if(confirm('Desea eliminar el usuario?')){
        deleteUsuario(user.id);
      }
    }

    return (<tr key={user.id}>
     <td>{user.nombre}</td>
     <td>{user.edad}</td>
     <td className='flex flex-row gap-2'>
        <button onClick={editar}>Editar</button>
        <button onClick={eliminar}>Eliminar</button>
     </td>
     </tr>)
})}
   </tbody> 
   </table>
    </div>
        )
    }

    export default UsuariosPage;