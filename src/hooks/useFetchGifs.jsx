
import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })


    useEffect(()=> {
        getGifts(category).then(imgs=> {
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 1000);
        });
    }, [category])

    return state; //{data:[], loading:true}
}
