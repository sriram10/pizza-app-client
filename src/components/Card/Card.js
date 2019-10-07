import React from 'react';

const Card = ({ id, name, image, description, price, type, view, submit }) => {
  return (
    <div className='card' onClick={() => view(id)}>
      <img src={image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div>Type: {type}</div>
      <div>{price}</div>
      <button type='button' onClick={() => submit(id)}>Order</button>
    </div>
  )
}

export default Card;