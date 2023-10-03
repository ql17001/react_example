import Image from 'next/image';
import React, { HTMLAttributes } from 'react'

interface IUsuario {
  id: number;
  firstName: string;
  lastName: string;
  picture: string;
  role: 'Admin' | 'Client';
}

export const users:IUsuario[] = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'Perez',
    picture: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    role: 'Admin'
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Hernandez',
    picture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    role: 'Client'
  },
  {
    id: 3,
    firstName: 'Alejandro',
    lastName: 'Sanchez',
    picture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    role: 'Client'
  },
  {
    id: 4,
    firstName: 'Cristina',
    lastName: 'Galdamez',
    picture: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    role: 'Admin'
  },
  {
    id: 5,
    firstName: 'John',
    lastName: 'Doe',
    picture: 'https://images.unsplash.com/photo-1606045555551-423ba7ede64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    role: 'Client'
  }
]

const Example1 = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h1 className='text-2xl font-bold'>Renderizar una lista de objetos</h1>
      {
        users.map(
          (user, index) => {
            return (
              <div key = {user.id} className='flex flex-row gap-4 border border-gray-300 rounded-lg overflow-hidden w-96'>
                <div className=' aspect-square w-32'>
                  <Image width={128} height={128} className=' object-cover w-full h-full' src={user.picture} alt={`User photo of ${user.firstName} ${user.lastName}`} />
                </div>
                <div className='flex flex-col justify-center'>
                  <span><span className='font-bold'>Nombre:</span> {user.firstName}</span>
                  <span><span className='font-bold'>Apellido:</span> {user.lastName}</span>
                  <span><span className='font-bold'>Rol:</span> {user.role}</span>
                </div>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default Example1