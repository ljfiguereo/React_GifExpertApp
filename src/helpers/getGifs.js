
export  const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=Q3UlDSBgFB36rnWtNG2SutoFx6hbB5r3&limit=10`;
    const resp = await fetch(url);

    const { data } = await resp.json(resp);

    const gifts = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifts;
}

