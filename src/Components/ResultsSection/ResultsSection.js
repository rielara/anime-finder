import AnimeCard from "../AnimeCard/AnimeCard"
import Input from "../Input/Input"
import { useState, useEffect } from "react"
import "./ResultsSection.css"


export default function ResultsSection (){
    const [list, setList] = useState([])
    async function searchByName(name){ 
        let response = await fetch(`https://api.jikan.moe/v4/anime?page=1&limit=25&q=${name}`)
        let results = await response.json()
        console.log(results)
        setList(results.data)}
  

    async function searchById(){
        let response = await fetch(`https://api.jikan.moe/v4/anime/${Math.floor(Math.random() * 10000)}`)
        if (response.ok) {
            let results = await response.json()
            console.log(results)
            setList([results.data])
        } else {
            searchById()
        }
        
    }

    async function searchByPopularity(){
        let response = await fetch(`https://api.jikan.moe/v4/anime?page=1&limit=25&order_by=members&sort=desc`)
        let results = await response.json()
        console.log(results)
        setList(results.data)
    }



    return <div>
    <Input searchByName={searchByName} handleRandom={searchById} handlePopular={searchByPopularity} handleChange={searchByName} text="Search" />
    <div id="result">
    {list.map((anime) => <AnimeCard key={anime.mal_id} AnimeUrl={anime.url} imageAlt={anime.title} imageSrc={anime.images.webp.image_url} AnimeTitle={anime.title}/>)}
    </div>

    </div>
}