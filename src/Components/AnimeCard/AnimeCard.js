import "./AnimeCard.css";

export default function AnimeCard({ AnimeUrl, imageAlt, imageSrc, AnimeTitle }){
    return <article id="card">
        <a href={AnimeUrl} target="blank">
        <figure>
        <img src={imageSrc} alt={imageAlt} ></img>
        <h3>{AnimeTitle}</h3>
        </figure>
        </a>

    </article>
}