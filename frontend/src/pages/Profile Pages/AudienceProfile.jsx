import { useParams } from "react-router"
import Navbar from "../../components/Navbar";
import CreatePost from "../../components/CreatePost";
import GetAudiencePosts from "../../components/GetAudiencePosts";

export default function AudienceProfile () {
    document.title = "Profile";
    const username = localStorage.getItem('username')

    return (
        <div className="">
            <Navbar type = {'audience'} name = {{username}}/>
            <div className="mt-5 mx-32">
                <h1 className="mt-5font-robot font-light text-4xl text-center">{username}</h1>
                <CreatePost />
                <div className="mt-24"><GetAudiencePosts /></div>
            </div>
        </div>
    )
}