import React from 'react'
import trollFace from './../images/troll-face.png'

export default function Header(){
    return (
        <div className="header">
            <img src={trollFace} alt="" className="header--troll-face" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--course">React Course - Project 3</h4>
        </div>
    )
}