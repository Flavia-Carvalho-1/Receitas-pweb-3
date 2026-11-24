import Form from "next/form"

export function FormularioBusca(){

    return (

        <Form action="/filmes" className="form-busca">

            <label htmlFor="idTitulo">Título</label>

            <input id="idTitulo" name="titulo" required />

            <label htmlFor="idAno">Ano</label>

            <input id="idAno" name="ano" placeholder="ex.: 1987" />

            <label htmlFor="idTipo">Tipo</label>

            <select id="idTipo" name="tipo">

                <option value="">Todos</option>
                <option value="movie">Filme</option>
                <option value="series">Série</option>
                <option value="episode">Episódio</option>

            </select>

            <button type="submit">Pesquisar</button>

        </Form>

    )

}