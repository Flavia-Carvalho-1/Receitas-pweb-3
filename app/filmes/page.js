export default async function Filmes({searchParams}){

    const {titulo = 'bagdad', ano = '', tipo = ''} = await searchParams

    const params = new URLSearchParams({
        apikey: process.env.OMDB_API_KEY,
        s: titulo,
    })

    if (ano) params.set('y', ano)
    if (tipo) params.set('type', tipo)

    const res = await fetch(`https://www.omdbapi.com/?${params}`)

    const data = await res.json()

    return (

        <div>

            {data.Search.map( (m) => (

                <div key={m.imdbID}>

                    <div>{m.Title} --- {m.Year}</div>

                    {m.Poster !== 'N/A' && <img src={m.Poster} alt={m.Title} width="100" />}

                </div>

            ))}

        </div>

    )

}