import React from 'react'
import { users } from '../../1/page';
import Image from 'next/image';

interface IDetallesUsuarioProperties {
  params: {
    // los params siempre son string
    usuarioId: string;
  }
}

const DetallesUsuario = ({params} : IDetallesUsuarioProperties) => {
  const { usuarioId } = params;

  const userInfo = users.find((user) => user.id === Number(usuarioId));
  return (
    <div>
      {
        userInfo ? 
        <div className='border border-gray-300 flex flex-row gap-2'>
          <Image className='flex-1 overflow-hidden' height={500} width={500} src={userInfo.picture} alt={`Picture of ${userInfo.firstName} ${userInfo.lastName}`}/>
          <div className='flex flex-col flex-[4]'>
            <h1 className='text-2xl'>{`${userInfo.firstName} ${userInfo.lastName}`}</h1>
            <h2 className='text-lg'>{userInfo.role}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat porro doloribus exercitationem a sequi facere deleniti maxime temporibus minima natus, architecto nulla aspernatur cum laboriosam? Odio alias illo quam impedit!</p>
          </div> 
        </div>
        :
        <h1 className='text-2xl text-red-500'>
          {`Usuario con id ${usuarioId} no encontrado.`}
        </h1>
      }
    </div>
  )
}

export default DetallesUsuario