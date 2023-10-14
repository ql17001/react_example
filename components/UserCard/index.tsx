import Image from 'next/image'
import React from 'react'

export interface IUserProperties {
  picture: string;
  firstName: string;
  lastName: string;
  role: string;
} 

const UserCard = (properties:IUserProperties) => {

  const { picture, firstName, lastName, role } = properties;

  return (
    <div className='flex flex-row gap-4 border border-gray-300 rounded-lg overflow-hidden w-96'>
      <div className=' aspect-square w-32'>
        <Image width={128} height={128} className=' object-cover w-full h-full' src={picture} alt={`User photo of ${firstName} ${lastName}`} />
      </div>
      <div className='flex flex-col justify-center'>
        <span><span className='font-bold'>Nombre:</span> {firstName}</span>
        <span><span className='font-bold'>Apellido:</span> {lastName}</span>
        <span><span className='font-bold'>Rol:</span> {role}</span>
      </div>
    </div>
  )
}

export default UserCard