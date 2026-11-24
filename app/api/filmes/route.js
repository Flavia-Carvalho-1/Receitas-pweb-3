export async function GET(request){

    const searchParams = request.nextUrl.searchParams

    const titulo = searchParams.get("titulo")

    const httpRes = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${titulo}`)

    const jsonRes = await httpRes.json()

    return Response.json({...jsonRes})

}