import React from "react";
// import memeData from "../memeData.js";


export default function Form() {
  let url;
  let memeData;

  // fetching api using the fetch method and handling side effect with use effect

 

  const [meme, setmeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });



  const [allMemes, setallMemes] = React.useState([]);


  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then((responds)=>
      responds.json()
      
       ).then((jsonRes)=>{
             
       
        memeData=jsonRes.data.memes;

         return (setallMemes(memeData))

      })  },[])


  function getMemeImage() {
  

  let randmemeobj = allMemes[Math.floor(Math.random() * allMemes.length)];

// here we using the seperetor operator....
    url = randmemeobj.url; 
    
                //const {url}=randmemeobj;// This is destructuring of the object in js which equal to randmemeobj.url
    setmeme((prevmeme)=>{
        return {
            ...prevmeme,
            randomImage:url
        }
    })
  
  
  }



  function handleChange(e){
   const {name, value}=e.target;
   setmeme((prevdata)=>{
    return({
      ...prevdata,
      [name]:value
    })
   })
  }


// Jsx started from here...

  return (
    <main>
    <div className="form">
        <input 
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
        />
        <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
        />
        <button 
            className="form--button"
            onClick={getMemeImage}
        >
            Get a new meme image 🖼
        </button>
    </div>
    <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
</main>
  );
}
