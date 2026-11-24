"use client"

import { useState } from "react"

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

        <div>

            <FormularioFilmes handleAction={handleAction} titulo={titulo} setTitulo={setTitulo}/>

            <TabelaFilmes filmes={ resultFilmes }/>

        </div>

    )

}

export function FormularioFilmes({handleAction, titulo, setTitulo}){

    return (

        <form action={handleAction}>

            <label htmlFor="idTitulo">Título</label>

            <input id="idTitulo" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

            <button type="submit">Pesquisar</button>

        </form>

    )

}

export function TabelaFilmes({filmes}){

    return (

        <div>

            <div>

                {filmes.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div> )}

            </div>

        </div>

    )

}