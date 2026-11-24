"use client"

import { useState, useCallback } from "react"
import { FormularioFilmes, TabelaFilmes } from "../filmes-cliente/page"

export default function Home(){

    const [resultFilmes, setResultFilmes] = useState([])

    const handleAction = useCallback(async (formData) => {

        const titulo = formData.get("titulo")

        const httpRes = await fetch(`/api/filmes?titulo=${encodeURIComponent(titulo)}`)

        const jsonRes = await httpRes.json()

        setResultFilmes(jsonRes.Search || [])

    }, [])

    return (

        <>

            <div className="subtitulo">Receita 19</div>

            <h1>Filmes (via API própria)</h1>

            <FormularioFilmes handleAction={handleAction}/>

            <TabelaFilmes filmes={ resultFilmes }/>

        </>

    )

}