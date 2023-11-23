import FetchArtistPosts from "../../components/FetchArtistPosts";
import FetchAudiencePosts from "../../components/FetchAudiencePosts";
import Navbar from "../../components/Navbar";

export default function AudiencePosts() {
    const username = localStorage.getItem('username');
    document.title = 'Posts'
    return (
        <div className="">
            <Navbar />
            
            <div className="mt-5 mx-32">
                <h1 className="mt-5font-robot font-light text-4xl text-center">Posts By Audiences</h1>
                <FetchAudiencePosts />
            </div>
        </div>
    )
}