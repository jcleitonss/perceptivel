import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Consume from './Consume.jpeg';
import Olho from './olho.png';
import Menu from './menu.js';
import Home  from './Home.js';
import './App.css';
import Post from './Post.js';


class Appshell extends Component {
  render() {
    return (
      <div>

<Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/News' component={ Post } />
          
        </Switch>
   
   <img src={Consume} id="back" />
   
 <div className="Menu">

 <img src={Olho} id="eyes"/>
      
  <h1 id="JP"> Perceptível</h1>
  
  <img src={Olho} id="eyes2"/>
 
  </div>

  <Menu/>
  <div >
        
       
 <script data-ad-client="ca-pub-2607522199426199" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

       

      </div>
      </div>
    );
  }
}

export default Appshell;
