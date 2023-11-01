import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import customAxios from "@/util/customAxios";
import { isAxiosError } from "axios";


interface IUserEditProperties{
params: {
    id:string;
}
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

const UserEdit = ({params: {id}}:IUserEditProperties) => {

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState(0);

    const getUsuario = useCallback(async () => {
        try {
          const response = await customAxios.get<IUsuarioEntity>('/usuario/${id}');
          console.log('Usuario con id 1:', response.data)

          setNombre(response.data.nombre)
          setEdad(response.data.edad)
        } catch (error) {
          if(isAxiosError(error)){
            console.log('Error de axios', error)
          }else{
            console.log('Otro error', error)
          }
        }
      }, [])

      useEffect (() => {
        getUsuario();
      },[getUsuario])

      const handleNombreOnChange = (event: ChangeEvent<HTMLInputElement>) => setNombre(event.currentTarget.value);
      const handleEdadOnChange = (event: ChangeEvent<HTMLInputElement>) => setEdad(Number(event.currentTarget.value));

      const updateUsuario = async () => {
        if(confirm('Desea actualizar los datos del usuario?')){
            try {
                const response = await customAxios.put<IUpdateUsuarioResponse>('/usuario/${id}', {
                  nombre,
                  edad
                },
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                });
                console.log('Message:', response.data.message)
          
                console.log('Data:', response.data.data)
      
                alert('Se modificaron los datos con éxito.')
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
                 <div className='flex flex-col'>
                <label htmlFor="firstName">Nombre:</label>
                <input onChange={()=>undefined} id='firstName' type="text" value={nombre} />
              </div> 
              <div className='flex flex-col'>
                <label htmlFor="firstName">Edad:</label>
                <input onChange={()=>undefined} id='firstName' type="number" value={edad} />
              </div>
              <button onClick={updateUsuario}>Editar</button>
              </div>
            )
        }
        
}