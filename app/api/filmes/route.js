export async function GET(request){

    const searchParams = request.nextUrl.searchParams

    const titulo = searchParams.get("titulo")
    const ano = searchParams.get("ano")
    const tipo = searchParams.get("tipo")

    if (!titulo) return Response.json({ Search: [], totalResults: "0" })

    const params = new URLSearchParams({
        apikey: process.env.OMDB_API_KEY,
        s: titulo,
    })

    if (ano) params.set('y', ano)
    if (tipo) params.set('type', tipo)

    try {

        const httpRes = await fetch(`https://www.omdbapi.com/?${params}`)

        const jsonRes = await httpRes.json()

        return Response.json({...jsonRes})

    } catch (err) {

        return Response.json({ error: "Falha ao consultar o OMDb" }, { status: 502 })

    }

}