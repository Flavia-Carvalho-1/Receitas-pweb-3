export default async function Filmes(){

    const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=bagdad`)

    const data = await res.json()

    return (

        <div>

            <div>

                {data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div> )}

            </div>

        </div>

    )

}