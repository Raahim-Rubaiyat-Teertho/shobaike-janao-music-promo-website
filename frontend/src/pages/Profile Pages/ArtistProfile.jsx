import { useParams } from "react-router"
import Navbar from "../../components/Navbar";
import CreatePost from "../../components/CreatePost";

export default function ArtistProfile() {
    const {username} = useParams();
    document.title = 'Profile' 

    return (
        <div className="">
            <Navbar type = {'artist'} name = {{username}}/>
            <div className="mt-5 mx-32">
                <h1 className="mt-5font-robot font-light text-4xl text-center">{username}</h1>
                <CreatePost />
            </div>
        </div>
    )
}