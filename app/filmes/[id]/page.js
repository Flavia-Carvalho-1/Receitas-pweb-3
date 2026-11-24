import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const revalidate = 86400

export async function generateStaticParams() {

    const todos = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=lady`).then((res) => res.json())

    return (todos.Search || []).map((filme) => ({
        id: filme.imdbID,
    }))

}

export default async function Filme({ params }) {

    const { id } = await params

    const filme = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`).then(res => res.json())

    if (filme.Response === 'False') notFound()

    return (

        <>

            <div className="subtitulo">Receita 21</div>

            <h1>{filme.Title} ({filme.Year})</h1>

            <div className="detalhe-filme">

                {filme.Poster !== 'N/A' && <Image src={filme.Poster} alt={filme.Title} width={300} height={444} />}

                <div>

                    <p><strong>Gênero:</strong> {filme.Genre}</p>

                    <p><strong>Duração:</strong> {filme.Runtime}</p>

                    <p><strong>Nota no IMDb:</strong> {filme.imdbRating}</p>

                    <p><strong>Diretor:</strong> {filme.Director}</p>

                    <p><strong>Elenco:</strong> {filme.Actors}</p>

                    <p><strong>Enredo:</strong> {filme.Plot}</p>

                </div>

            </div>

            <p><Link href="/filmes" className="botao voltar">← Voltar para a busca</Link></p>

        </>

    )

}