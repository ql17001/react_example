import UserCard, { IUserProperties } from '@/components/UserCard';
import UserForm from '@/components/UserForm';
import { Metadata } from 'next';
import React from 'react'

export const metadata:Metadata = {
  title: 'Ejemplo 2'
}

const Example2 = () => {
  return <UserForm/>
}

export default Example2