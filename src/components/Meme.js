import React, {useState} from 'react'
import memesData from './memesData.js'

export default function Meme(){
    const [memeImage, setMemeImage] = useState(memesData.data.memes[0].url)
    
    
    
    function getMemeImage(){
        const randomIndex = Math.floor(Math.random() * memesData.data.memes.length)
        const memeImage = memesData.data.memes[randomIndex].url
        setMemeImage(memeImage)
    }

    return(
        <main className="meme">
            <div className="meme--form">
                <input type="text" className="meme--form--input" placeholder="top text"/>
                <input type="text" className="meme--form--input" placeholder="bottom text"/>
                <button className="meme--form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={memeImage} alt="" className="meme--img"/>
        </main>
    )
}