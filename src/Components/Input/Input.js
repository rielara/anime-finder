import { useState } from "react"
import "./Input.css"

export default function Input({ searchByName, text, handleRandom, handlePopular }){
    const [search, setSearch] = useState("")


    function handleChange(e){
        setSearch(e.target.value)
    }
    function handleClick(){
        searchByName(search)
    }

    function handleKeyDown(e){
        if(e.key === "Enter"){
            searchByName(search)
        }
    }

 

    return <>
    <input id= "input" type="search" placeholder="Search for anime" requiredvalue={search} onChange={handleChange} onKeyDown={handleKeyDown}></input>
    <div id="button-container"><button id="button" onClick={handleClick}>{text}</button>
    <button id="button1" onClick={handleRandom}>Surprise me</button>
    <button id="button2" onClick={handlePopular}>Get most popular Animes</button>
    </div>
    </>
}