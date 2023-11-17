import { useEffect, useState } from "react";

export default function FindArtistById (props) {
    const [name, setName] = useState('');
    const u = "http://127.0.0.1:8000/artist/artist-detail-id/" + props.id;

    const find = async () => {
        const fetch_u = await fetch(u);
        const fetch_u_json = await fetch_u.json();
        return fetch_u_json;
    }

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            const res = await find();

            if (isMounted) {
                setName(res.name);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    return(
        <p>{name}</p>
    )
}