import React from "react";
import memeData from "../memeData.js";

export default function Form(){
let url;

const meme={
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
}

// console.log(typeof(memeData));
const [allMemeImages, setallMemeImages]=React.useState(memeData);
    
 const [img,setimg]=React.useState("");
 
    function generaterandomno(){
      const meme=   allMemeImages.data.memes;
    
    let randmemeobj;
    randmemeobj=meme[Math.floor(Math.random()*meme.length)];
    
//    const {url}=randmemeobj;// This is destructuring of the object in js which equal to randmemeobj.url
   url=randmemeobj.url;


    setimg(url);
    
    




}


    return (
        <div className="main">
            <div className="form">
                
                <input type="text"className="form--text" placeholder="top-text"/ >
                <input type="text"className="form--text"placeholder="bottom-text"/>
                <button className="form--button" onClick={generaterandomno}>Get new meme image 🎇</button>
            </div>
            <img src={img} className="memeimg"/>
        </div>
    )
}