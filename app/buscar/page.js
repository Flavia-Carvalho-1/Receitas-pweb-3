import Form from "next/form"

export default async function BuscarFilmes(){

    return (

        <Form action="/filmes">

            <label htmlFor="idTitulo">Título</label>

            <input id="idTitulo" name="titulo"/>

            <label htmlFor="idAno">Ano</label>

            <input id="idAno" name="ano"/>

            <button type="submit">Pesquisar</button>

        </Form>

    )

}