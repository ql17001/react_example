import React from 'react'
import { users } from '../1/page'
import Link from 'next/link'

const Example4 = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Rutas dinamicas</h1>
        <div className='flex flex-col gap-1'>
        {
          users.map(
            (user) => (<Link className='enlace' key = {user.id} href={`/examples/4/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link>)
          )
        }
      </div>
    </div>
  )
}

export default Example4