import React from 'react'

export interface ICardProperties {
  title: string;
  content: string;
}

const Card = ({ title, content }:ICardProperties) => {
  return (
    <div className='border border-gray-300 rounded-md'>
      <div className='p-2 border-b border-gray-300'>
        <span className='font-bold'>{title}</span>
      </div>
      <div className='p-2'>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Card