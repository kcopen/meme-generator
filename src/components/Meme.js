import React, {useState, useEffect} from 'react'

export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemesData, setAllMemesData] = useState([])
    
    useEffect(()=>{
        async function getMemes(){
            const res = await fetch(`https://api.imgflip.com/get_memes`)
            const data = await res.json()
            setAllMemesData(data.data.memes)
        }
        getMemes()
    },[])
    
    function getNewMemeImage(event){
        event.preventDefault()
        const randomIndex = Math.floor(Math.random() * allMemesData.length)
        const memeImage = allMemesData[randomIndex].url
        setMeme(prevMeme =>{
            return{
                ...prevMeme,
                randomImage: memeImage
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                [name] : value
            }
        })
    }

    return(
        <main>
            <div className="meme--form" >
                <input type="text" className="meme--form--input" placeholder="top text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" className="meme--form--input" placeholder="bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                <button className="meme--form--button" onClick={getNewMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme--img"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
