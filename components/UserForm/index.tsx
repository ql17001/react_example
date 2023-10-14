'use client';
import React, { ChangeEvent, useState } from 'react'
import UserCard, { IUserProperties } from '../UserCard';

type TRoles = 'Client' | 'Admin';

interface IUser extends IUserProperties {
  id: number;
}

const UserForm = () => {
  const [users, setUsers] = useState<IUser[]>([])

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState<TRoles>('Client')
  const [picture, setPicture] = useState('');
  const [terms, setTerms] = useState(false)

  const handleNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value)
  };

  const handleLastNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value)
  }

  const handlePictureOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setPicture(event.currentTarget.value)
  }

  const handleRoleOnChange = (event:ChangeEvent<HTMLSelectElement>) => {
    if(event.currentTarget.value === 'Client' || event.currentTarget.value === 'Admin'){
      setRole(event.currentTarget.value)
    }
  }

  const handleTermsOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setTerms(event.currentTarget.checked)
  }

  const handleGuardarOnClick = () => {
    console.log('--------------')
    console.log('Nombre:', firstName)
    console.log('Apellido:', lastName)
    console.log('Rol:', role)
    console.log(terms ? 'Acepto los terminos'  : 'No acepto los terminos')
    console.log('--------------')

    setUsers((previousUsers) => {
      const newUser:IUser = {
        id: previousUsers.length+1,
        firstName: firstName,
        lastName: lastName,
        picture: picture,
        role: role
      }

      const newUsers:IUser[] = [...previousUsers, newUser]

      return newUsers;
    })
  }

  return (
    <div>
      <h1 className='font-bold'>Capturar datos</h1>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Nombre:</label>
        <input onChange={handleNameOnChange} id='firstName' type="text" value={firstName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="lastName">Apellido:</label>
        <input onChange={handleLastNameOnChange} id='lastName' type="text" value={lastName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="picture">Foto:</label>
        <input onChange={handlePictureOnChange} id='picture' type="text" value={picture} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="rol">Rol:</label>
        <select onChange={handleRoleOnChange} id='rol' value={role}>
          <option value='Client'>Cliente</option>
          <option value='Admin'>Administrador</option>
        </select>
      </div>
      <div  className='flex flex-row gap-1 items-center'>
        <label htmlFor="terms">Aceptar terminos y servicios</label>
        <input onChange={handleTermsOnChange} id='terms' type="checkbox" checked={terms}/>
      </div>
      <button onClick={handleGuardarOnClick}>Guardar</button>
      {
        users.map(
          (user) => <UserCard key={user.id} {...user}/>
        )
      }
    </div>
  )
}

export default UserForm