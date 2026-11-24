import Form from "next/form"

export default async function BuscarFilmes(){

    return (

        <Form action="/filmes">

            <label htmlFor="idTitulo">Título</label>

            <input id="idTitulo" name="titulo"/>

            <button type="submit">Pesquisar</button>

        </Form>

    )

}