import React, { Component } from 'react';
import logo from '../../image/logo3.png';
import video from '../../video/fruit.mp4';
import '../../style/bootstrap.min.css';
import '../../style/fontello.css';
import '../../style/custom.css';
<<<<<<< HEAD
import './cus.css';

import LogIn from './LogIn';
import SignUp from './SignUp';

class Landing extends Component {

=======


import LogIn from './LogIn';
import SignUp from './SignUp';
class Landing extends Component {
  
>>>>>>> 8f5b8527e85aed45565c0c91b3b868db463bdcae
  render() {
    return (
      <div>
        <video id="background-video" autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <div class="row" id="log">
          <img id="logo"src={logo} alt="UBUNG"/>
          <div class="container" id="register">
            <LogIn/>
            <SignUp/>
            {/*<button class="button"><span class="icon-gplus">Login</span></button>*/}
            {/*<button class="button"><span class="icon-gplus">Singup</span></button>*/}
          </div>
        </div>
        <input type="checkbox" class="checkbox" id="check"/>
        <label class="menu" for="check"><span class="icon-question"></span></label>
        <div class="left-panel"> 
<<<<<<< HEAD
          <div class="container">
            <div class="interior">
              <a class="btn" href="#open-modal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>¿Qué es UBUNG?</a>
            </div>
          </div>
          <div id="open-modal" class="modal-window">
            <div>
              <a href="#modal-close" title="Close" class="modal-close">Close</a>
              <h1>UBUNG!</h1>
              <div>Es un website que te ayudara a tener una vida mas sana en base a recomendaciones....</div>
              </div>
=======
          
          <div class="list-group">
          <h2 id="faq-h2">Preguntas Frecuentes</h2>
            <a href="" class="list-group-item list-group-item-info">¿Qué es UBUNG?</a>
            <a href="" class="list-group-item list-group-item-info">question</a>
            <a href="" class="list-group-item list-group-item-info">quesiotn</a>
>>>>>>> 8f5b8527e85aed45565c0c91b3b868db463bdcae
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
