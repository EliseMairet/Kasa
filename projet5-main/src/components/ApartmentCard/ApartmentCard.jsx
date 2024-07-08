import React from 'react'
import "./ApartmentCard.scss"

function ApartementCard(props) {
  return (
    <div className='apartement'>
      <img src={props.image} alt={props.title} className="card_img" />
        <h2 className="card_title">{props.title}</h2>
    </div>
  )
}

export default ApartementCard;