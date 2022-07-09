import React from 'react';
import './App.css';
import Card from './components/cards';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ToTop from './components/totop';
import data from './components/data';

export default function App() {
  
  const cards = data.map( item => <Card key={data.id} {...item}/> );

  return (
    <section className="container">
      <Navbar/>
      <section className='card--container'>
        {cards}
      </section>
      <Footer/>
      <ToTop/>
    </section>
  );
}

