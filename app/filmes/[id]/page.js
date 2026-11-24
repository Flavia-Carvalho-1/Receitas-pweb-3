import Image from 'next/image'
export const revalidate = 86400

export default async function Filme({ params }) {

    const { id } = await params

    const filme = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`).then(res => res.json())

    return (

        <div>

            <h1>{filme.Title} ({filme.Year})</h1>

            {filme.Poster !== 'N/A' && <Image src={filme.Poster} alt={filme.Title} width={300} height={444} />}

            <p>Diretor: {filme.Director}</p>

            <p>Enredo: {filme.Plot}</p>

        </div>

    )

}

export async function generateStaticParams() {

    const todos = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=lady`).then((res) => res.json())

    return todos.Search.map((filme) => ({
        id: filme.imdbID,
    }))

}