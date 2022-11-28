import React from "react";
import "./App.css";
import Fruit from "./Fruit"

const data  = [
  {id: 1 , img: "https://picsum.photos/901/180"  , title:"Card Title 1" , text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , textMuted: 'Last updated 1 mins ago'},
  {id: 2 , img: "https://picsum.photos/902/180"  , title:"Card Title 2" , text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , textMuted: 'Last updated 1 mins ago'},
  {id: 3 , img: "https://picsum.photos/903/180"  , title:"Card Title 3" , text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , textMuted: 'Last updated 1 mins ago'},
  {id: 4 , img: "https://picsum.photos/904/180"  , title:"Card Title 4" , text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , textMuted: 'Last updated 1 mins ago'}, 
   {id: 5 , img: "https://picsum.photos/905/180"  , title:"Card Title 5" , text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , textMuted: 'Last updated 1 mins ago'},
   {id: 6 , img: "https://picsum.photos/906/180"  , title:"Card Title 6" , text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , textMuted: 'Last updated 1 mins ago'},
   {id: 7 , img: "https://picsum.photos/907/180"  , title:"Card Title 7" , text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , textMuted: 'Last updated 1 mins ago'},
   {id: 8 , img: "https://picsum.photos/908/180"  , title:"Card Title 8" , text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , textMuted: 'Last updated 1 mins ago'},
   {id: 9 , img: "https://picsum.photos/909/180"  , title:"Card Title 9" , text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , textMuted: 'Last updated 1 mins ago'},


]

function App() {
  return (
    <div className="container">
      <br /><br />
      <h1>Props Amalyot mini project</h1>
      <br />
      <div className="row justify-beetwen">
      {data.map((item)=>{
        return <Fruit id={item.id} img={item.img} title={item.title} text={item.text} textMuted={item.textMuted}/>

      })}
      </div>
    </div>
  );
}

export default App;
