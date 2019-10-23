import React from 'react';

import './menu.css';



class Menu extends React.Component{
  render(){
  return (

<div class="menu">



<input type="checkbox" id="check"/>
<label id="icone" for="check" ><img src="menu.png" id="img" /> </label>

<div class="barra">


<nav>
  <a href="/"> <div class="link" > <p>Home</p> </div> </a>

  <a href="/News"> <div class="link" > <p>News:Fake vs true</p> </div> </a>


</nav>



</div>

</div>

);
}}

export default Menu;
