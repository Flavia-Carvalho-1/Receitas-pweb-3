'use server'

export async function buscarFilmes(formData){

    const titulo = formData.get("titulo")

    if (!titulo || titulo == '') return {Search: []}

    try{

        const httpRes = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${titulo}`)

        const jsonRes = await httpRes.json()

        return jsonRes

    }catch(err){

        return {error: `Erro na requisição ${err}`}

    }

}