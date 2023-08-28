import React from "react";
import memeData from "../memeData.js";

export default function Form() {
  let url;

  const [meme, setmeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setallMemeImages] = React.useState(memeData);

  function generaterandomno() {
    const memeArray = allMemeImages.data.memes;

    let randmemeobj = memeArray[Math.floor(Math.random() * memeArray.length)];

// here we using the seperetor operator....
    url = randmemeobj.url; //const {url}=randmemeobj;// This is destructuring of the object in js which equal to randmemeobj.url
    setmeme((prevmeme)=>{
        return {
            ...prevmeme,
            randomImage:url
        }
    })
  }

  return (
    <div className="main">
      <div className="form">
        <input type="text" className="form--text" placeholder="top-text" />
        <input type="text" className="form--text" placeholder="bottom-text" />
        <button className="form--button" onClick={generaterandomno}>
          Get new meme image 🎇
        </button>
      </div>
      <img src={meme.randomImage} className="memeimg" />
    </div>
  );
}
