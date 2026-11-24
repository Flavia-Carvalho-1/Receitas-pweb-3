"use client"

import { useState, useCallback, memo } from "react"
import { useFormStatus } from "react-dom"

export default function Home(){

    const [resultFilmes, setResultFilmes] = useState([])

    const handleAction = useCallback(async (formData) => {

        const chave = formData.get("titulo")

        const httpRes = await fetch(`/api/filmes?titulo=${encodeURIComponent(chave)}`)

        const jsonRes = await httpRes.json()

        setResultFilmes(jsonRes.Search || [])

    }, [])

    return (

        <>

            <div className="subtitulo">Receita 18</div>

            <h1>Filmes (busca no navegador)</h1>

            <FormularioFilmes handleAction={handleAction}/>

            <TabelaFilmes filmes={ resultFilmes }/>

        </>

    )

}

export const FormularioFilmes = memo(function FormularioFilmes({handleAction}){

    console.log("redesenhando: formulário")

    const [titulo, setTitulo] = useState("")

    return (

        <form action={handleAction} className="form-busca">

            <label htmlFor="idTitulo">Título</label>

            <input id="idTitulo" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

            <BotaoPesquisar/>

        </form>

    )

})

export function BotaoPesquisar(){

    const { pending } = useFormStatus()

    return (

        <button type="submit" disabled={pending}>

            {pending ? "Pesquisando..." : "Pesquisar"}

        </button>

    )

}

export function TabelaFilmes({filmes}){

    console.log("redesenhando: tabela")

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