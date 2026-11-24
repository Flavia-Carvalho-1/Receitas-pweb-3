"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"

export default function Home(){

    const [resultFilmes, setResultFilmes] = useState([])

    const [titulo, setTitulo] = useState("")

    async function handleAction(formData){

        const chave = formData.get("titulo")

        const httpRes = await fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${chave}`)

        const jsonRes = await httpRes.json()

        setResultFilmes(jsonRes.Search || [])

    }

    return (

        <>

            <div className="subtitulo">Receita 18</div>

            <h1>Filmes (busca no navegador)</h1>

            <FormularioFilmes handleAction={handleAction} titulo={titulo} setTitulo={setTitulo}/>

            <TabelaFilmes filmes={ resultFilmes }/>

        </>

    )

}

export function FormularioFilmes({handleAction, titulo, setTitulo}){

    return (

        <form action={handleAction} className="form-busca">

            <label htmlFor="idTitulo">Título</label>

            <input id="idTitulo" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

            <BotaoPesquisar/>

        </form>

    )

}

export function TabelaFilmes({filmes}){

    return (

        <div className="lista-filmes">

            {filmes.map( (m) => (

                <div key={m.imdbID} className="filme">

                    {m.Poster !== 'N/A' && <img src={m.Poster} alt={m.Title} width="80" />}

                    <div>

                        <strong>{m.Title}</strong>

                        <div className="subtitulo">{m.Year} · {m.Type}</div>

                    </div>

                </div>

            ))}

        </div>

    )

}

export function BotaoPesquisar(){

    const { pending } = useFormStatus()

    return (

        <button type="submit" disabled={pending}>

            {pending ? "Pesquisando..." : "Pesquisar"}

        </button>

    )

}