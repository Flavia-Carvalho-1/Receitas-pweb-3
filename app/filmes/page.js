import Link from "next/link"
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

    const filmes = data.Search || []

    return (

        <>

            <div className="subtitulo">Receita 16</div>

            <h1>Filmes</h1>

            <p>
                Resultados para <strong>{titulo}</strong>
                {ano && <> em {ano}</>}
                {tipo && <> ({tipo})</>}
                : {data.totalResults || 0} no total.
            </p>

            {filmes.length === 0 && <p>Nenhum filme encontrado.</p>}

            <div className="lista-filmes">

                {filmes.map( (m) => (

                    <div key={m.imdbID} className="filme">

                        {m.Poster !== 'N/A' && <img src={m.Poster} alt={m.Title} width="80" />}

                        <div>
                            <Link href={`/filmes/${m.imdbID}`}><strong>{m.Title}</strong></Link>
                            <div className="subtitulo">{m.Year} · {m.Type}</div>
                        </div>

                    </div>

                ))}

            </div>

        </>

    )

}