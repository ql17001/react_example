import { Routes } from '@/util/constants'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex flex-row justify-between p-6 bg-zs21006-primary-color text-white'>
      <Link href={Routes.HOME} className='text-xl font-bold'>React example</Link>
      <div className='flex flex-row gap-4'>
        <Link href={Routes.HOME}>Inicio</Link>
        <Link href={Routes.EXAMPLES_HOME}>Ejemplos</Link>
        <Link href={'/usuarios'}>Usuarios</Link>
        <Link href={'/login'}>Login</Link>
      </div>
    </div>
  )
}

export default Header


