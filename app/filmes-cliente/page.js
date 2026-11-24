"use client"

export default function Home(){

    return (

        <div>

            <FormularioFilmes/>

            <TabelaFilmes filmes={ [] }/>

        </div>

    )

}

export function FormularioFilmes(){

    function handleAction(formData){

        console.log(formData.get("titulo"))

    }

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