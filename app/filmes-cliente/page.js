"use client"

import { useState } from "react"

export default function Home(){

    const [resultFilmes, setResultFilmes] = useState([])

    async function handleAction(formData){

        const titulo = formData.get("titulo")

        const httpRes = await fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${titulo}`)

        const jsonRes = await httpRes.json()

        setResultFilmes(jsonRes.Search || [])

    }

    return (

        <div>

            <FormularioFilmes handleAction={handleAction}/>

            <TabelaFilmes filmes={ resultFilmes }/>

        </div>

    )

}

export function FormularioFilmes({handleAction}){

    return (

        <form action={handleAction}>

            <label htmlFor="idTitulo">Título</label>

            <input id="idTitulo" name="titulo"/>

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