import { useEffect, useState } from "react"
import PostCard from "./PostCard";
import AudiencePostCard from "./AudiencePostCard";

export default function GetAudiencePosts(props) {
    const [data, setData] = useState([]);
    const username = localStorage.getItem('username');
    const u_id = "http://127.0.0.1:8000/audience/audience-list/" + username;
    const fetchAudiencePosts = async () => {
        //Finding audience Id
        const fetch_u = await fetch(u_id);
        const fetch_u_json = await fetch_u.json();
        
        //Fetch posts using Id
        const fetch_posts_url = "http://127.0.0.1:8000/audience/posts-by/" + fetch_u_json.id;
        const fetch_posts = await fetch(fetch_posts_url);
        const posts_json = await fetch_posts.json()

        return posts_json;
    }

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            const posts = await fetchAudiencePosts();

            if (isMounted) {
                // console.log(posts);
                setData(posts);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>
            {
                <AudiencePostCard d = {data} type = {'account'}/>
            }

        </>
    )
}