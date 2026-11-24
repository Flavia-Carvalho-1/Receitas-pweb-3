'use server'

export async function buscarFilmes(formData){

    const titulo = formData.get("titulo")
    const ano = formData.get("ano")
    const tipo = formData.get("tipo")

    if (!titulo || titulo == '') return {Search: []}

    const params = new URLSearchParams({
        apikey: process.env.OMDB_API_KEY,
        s: titulo,
    })

    if (ano) params.set('y', ano)
    if (tipo) params.set('type', tipo)

    try{

        const httpRes = await fetch(`https://www.omdbapi.com/?${params}`)

        const jsonRes = await httpRes.json()

        return jsonRes

    }catch(err){

        return {error: `Erro na requisição ${err}`}

    }

}