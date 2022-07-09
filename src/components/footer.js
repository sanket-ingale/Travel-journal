import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <section className='links'>
        <a href="mailto:sanket.ingale1998@gmail.com" target="_blank">
            <img src={require('../images/gmail.png')} alt='gmail' className='link--icon'/>
        </a>
        <a href="https://www.linkedin.com/in/sanket-ingale1998/" target="_blank">
            <img src={require('../images/linkedin.png')} alt='linkedin' className='link--icon'/>
        </a>
        <a href="https://www.instagram.com/lightbuster_/" target="_blank">
            <img src={require('../images/instagram.png')} alt='insta' className='link--icon'/>
        </a>
        <a href="https://github.com/sanket-ingale" target="_blank">
            <img src={require('../images/github.png')} alt='git' className='link--icon'/>
        </a>
      </section>
      <section className='copyright'>Sanket Ingale &copy; 2022</section>
    </div>
  );
}