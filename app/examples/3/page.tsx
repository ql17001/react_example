'use client';
import Card, { ICardProperties } from '@/components/Card'
import React, { ChangeEvent, useState } from 'react'


interface ICardsWithId extends ICardProperties {
  id: number;
}



const initialState:ICardsWithId[] = [
  {
    id: 1,
    title: 'Carta 1',
    content: 'Contenido de la carta 1'
  },
  {
    id: 2,
    title: 'Carta 2',
    content: 'Contenido de la carta 2'
  },
  {
    id: 3,
    title: 'Carta 3',
    content: 'Contenido de la carta 3'
  },
]

const Example3 = () => {
  const [cards, setCards] = useState(initialState)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const handleContentOnChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value)
  }

  const handleGuardarOnClick = () => {
    // El id de la nueva card va a ser igual al id de la ultima card + 1
    const newCard = {
      id: cards[cards.length-1].id + 1,
      title,
      content
    }

    // setState puede recibir el valor o una funcion que recibe de argumento
    // el valor actual del estado, y el valor que retorne la funcion sera
    // el nuevo valor del estado, en este caso retorno un array con el contenido
    // del array del estado (extraido usando el operador spread) mas la nueva card
    setCards(previousCards => [...previousCards, newCard])

    // limpio title y content
    setTitle('')
    setContent('')
  }

  return (
    <div>
      <div className='mb-4'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="title">Titulo</label>
          <input id='title' type="text" value={title} onChange={handleTitleOnChange}/>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="content">Contenido</label>
          <textarea id="content" cols={30} rows={5} value={content} onChange={handleContentOnChange}/>
        </div>
        <button className='my-1' onClick={handleGuardarOnClick}>Agregar</button>
      </div>
      <div className='grid grid-cols-4 gap-2'>
        {cards.map((card, index, arrayOfCards) => {
            const handleEliminarOnClick = () => {
              const idCardActual = card.id;
              // Filtra las cards para que excluya la card que se elimino
              const newCards = cards.filter(cardToDelete => cardToDelete.id !== idCardActual);
              setCards(newCards)
            }
            return (<div key={card.id} className='flex flex-col gap-1'>
                <Card title={card.title} content={card.content}/>
                {arrayOfCards.length !== 1 && <button className='self-center' onClick={handleEliminarOnClick}>Eliminar</button>}
              </div>)
          })}
      </div>
    </div>
  )
}

export default Example3