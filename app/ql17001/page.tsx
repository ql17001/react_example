import Image from 'next/image'
import React from 'react'
import FFTAImage from '@/public/ffta.jpg';

const TopPage = () => {
  return (
    <div>
      <div className='grid grid-cols-5 grid-rows-5'>
        <div className=' bg-red-500 p-10 row-span-5 col-span-3'>
          <h1>Puesto 1</h1>
          <h2>Final Fantasy Tactics Advance</h2>
          <Image src={FFTAImage} alt={'Image of final fantasy tactics advance'}/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, possimus provident? Sunt, eum voluptatum? Unde, saepe odio fuga incidunt sunt totam aut ut aperiam voluptate facilis fugiat ipsum. Molestiae, vitae.</p>
        </div>
        <div className=' bg-blue-500 p-10 row-span-3 col-span-2'>Puesto 2</div>
        <div className=' bg-green-400 p-10 row-span-2 col-span-2'>Puesto 3</div>
      </div>
    </div>
  )
}

export default TopPage