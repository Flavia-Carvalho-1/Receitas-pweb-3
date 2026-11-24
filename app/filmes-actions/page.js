"use client"

import { buscarFilmes } from "../actions/filmeActions"
import { useState } from "react"
import { TabelaFilmes, BotaoPesquisar } from "../filmes-cliente/page"

export default function Home(){

    const [data, setData] = useState({})

    async function handleAction(formData){

        const res = await buscarFilmes(formData)

        setData(res)

    }

    return (

        <>

            <div className="subtitulo">Receita 20</div>

            <h1>Filmes (server action)</h1>

            <FormularioFilmes actionHandler={handleAction}/>

            {data.error && <p>{data.error}</p>}

            {data.Error && <p>Nenhum filme encontrado (a API respondeu: {data.Error}).</p>}

            {data.Search && <TabelaFilmes filmes={data.Search}/>}

        </>

    )

}

export function FormularioFilmes({actionHandler}){

    return (

        <form action={actionHandler} className="form-busca">

            <label htmlFor="idTitulo">Título</label>

            <input id="idTitulo" name="titulo" required/>

            <label htmlFor="idAno">Ano</label>

            <input id="idAno" name="ano" placeholder="ex.: 1987"/>

            <label htmlFor="idTipo">Tipo</label>

            <select id="idTipo" name="tipo">

                <option value="">Todos</option>
                <option value="movie">Filme</option>
                <option value="series">Série</option>
                <option value="episode">Episódio</option>

            </select>

            <BotaoPesquisar/>

        </form>

    )

}