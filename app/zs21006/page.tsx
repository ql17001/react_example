import React from 'react';
import Image from 'next/image';
const TopPage = () => {
    return (
        <div>
            <div className = 'grid grid-cols-5 grid-rows-5' >
                <div className='bg-red-500 p-10 row-span-5 col-span-3'>
                    <h1>Puesto 1</h1>
                    <h2>Arctic Monkeys</h2>
                    <Image src={'/am.jpg'} alt={'Arctic Monkeys'} height={500} width={500}/>
                    <p>Arctic Monkeys es una banda británica de rock alternativo, formada en Sheffield, Reino Unido.​ El grupo está compuesto por el guitarrista principal y vocalista Alex Turner, el guitarrista Jamie Cook, el baterista Matt Helders y el bajista Nick OMalley</p>
                </div>
                <div className='bg-blue-500 p-10 row-span-3 col-span-2'>
                    <h1>Puesto 2</h1>
                    <h2>$uicideBoy$</h2>
                    <Image src={'/sb.jpg'} alt={'$uicideBoy$'} height={500} width={500}/>
                    <p>Suicideboys es un dúo estadounidense de hip hop formado en Nueva Orleans en 2014.​ Sus miembros son los raperos Scrim y Ruby da Cherry. Son considerados como uno de los exponentes del indie hip hop.</p>
                    </div>
                <div className='bg-green-500 p-10 row-span-2 col-span-2'>
                    <h1>Puesto 3</h1>
                    <h2>Mac Miller</h2>
                    <Image src={'/mac.jpg'} alt={'Mac Miller'} height={500} width={500}/>
                    <p>Malcolm James McCormick, ​ conocido como Mac Miller, ​ fue un rapero, cantante y productor discográfico estadounidense. Miller comenzó su carrera en la escena hip-hop de Pittsburgh en 2007, a la edad de quince años.</p>
                </div>

            </div>
        </div>
    )
}

export default TopPage;