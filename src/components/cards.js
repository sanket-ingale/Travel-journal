import React from 'react';
import './cards.css';

export default function Card(props) {
  return (
    <div className="card">
      <img src={require(`../images/${props.coverImg}`)} alt='' className='cover--img'></img>
      <section className='info'>
        <div className='location--info'>
            <img src={require('../images/placeholder.png')} alt='' className='location--icon'></img>
            <span className='state'>{props.state}</span>
            <a href={props.mapLink} className='map--link' target="_blank">View on google maps</a>
        </div>
        <h1 className='location'>{props.location}</h1>
        <h3 className='date'>{props.date}</h3>
        <p className='description'>{props.description}</p>
      </section>
    </div>
  );
}
