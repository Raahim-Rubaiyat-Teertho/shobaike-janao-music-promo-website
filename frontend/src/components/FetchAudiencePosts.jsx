import { useEffect, useState } from "react";
import AudiencePostCard from "./AudiencePostCard";

export default function FetchAudiencePosts () {
    const lnk = "http://127.0.0.1:8000/audience/posts/";
    const [data, setData] = useState([]);
    
    const getPosts = async () => {
        try{
            const lnk_fetch = await fetch(lnk);
            const lnk_fetch_json = await lnk_fetch.json();
            setData(lnk_fetch_json);
        }

        catch(err) {
            console.log(err);
        }
    }  

    useEffect(
        () => {
            getPosts();
        }, []
    )

    // useEffect(
    //     () => {
    //         console.log(data);
    //     }, [data]
    // )

    return (
        <>
            <AudiencePostCard d = {data}/>
        </>
    )
}