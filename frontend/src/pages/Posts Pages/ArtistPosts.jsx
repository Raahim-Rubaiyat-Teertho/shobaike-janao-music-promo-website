import FetchArtistPosts from "../../components/FetchArtistPosts";
import Navbar from "../../components/Navbar";

export default function ArtistPosts() {
    const username = localStorage.getItem('username');
    document.title = 'Posts'
    return (
        <div className="">
            <Navbar type = {'artist'} name = {{username}}/>
            
            <div className="mt-5 mx-32">
                <h1 className="mt-5font-robot font-light text-4xl text-center">Posts By Artists</h1>
                <FetchArtistPosts />
            </div>
        </div>
    )
}