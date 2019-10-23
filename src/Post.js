import React from 'react';
import "./Post.css";
import News from "./news.png";

class Post extends React.Component{
  render(){
  return (
    
    <div className="News" >

     <h2 id="titlenews">News:Fake versus True</h2>
     <p id="p">Convidamos a todos para a palestra sobre "fake news", onde será abordado os seus impactos na sociedade e discutiremos métodos para combatê-las.</p>

    <img src={News} id="imgnews"/> 

    
     <br/>
     <br/>
    </div>
    
  );
}}

export default Post;
