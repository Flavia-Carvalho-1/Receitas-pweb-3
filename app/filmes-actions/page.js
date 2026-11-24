"use client"

import { buscarFilmes } from "../actions/filmeActions"
import { useState } from "react"
import { TabelaFilmes } from "../filmes-cliente/page"

export default function Home(){

    const [data, setData] = useState({})

    async function handleAction(formData){

        const res = await buscarFilmes(formData)

        setData(res)

    }

    return (

        <div>

            <FormularioFilmes actionHandler={handleAction}/>

            {data.Search && <TabelaFilmes filmes={data.Search}/>}

        </div>

    )

}

export function FormularioFilmes({actionHandler}){

    return (

        <form action={actionHandler}>

            <label htmlFor="idTitulo">Título</label>

            <input id="idTitulo" name="titulo"/>

            <button type="submit">Pesquisar</button>

        </form>

    )

}