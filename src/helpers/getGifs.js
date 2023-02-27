

export const getGifs = async ( category ) => {

    // Preparamos la url de consulta
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Zr2On9LqId8PV1aUGfmVvhXG84cQkU27&q=${ category }&limit=10`

    // Lanzamos la petición y almacenamos la respuesta
    const resp = await fetch( url );
    // Extraemos la data de la respuesta
    const { data } = await resp.json();

    // Extraemos la data que nos interesa
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    // Devolvemos los gifs
    return gifs;
    
}