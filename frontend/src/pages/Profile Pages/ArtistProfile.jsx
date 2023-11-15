import { useParams } from "react-router"

export default function ArtistProfile() {
    const {username} = useParams();

    const u = "http://127.0.0.1:8000/artist/api/get-session/";

    const handleGet = async (e) => {
        const res = await fetch(u);
        const res_json = await res.json();
        console.log(res_json)
    }
    return (
        <button onClick={handleGet}>Hi</button>
    )
}