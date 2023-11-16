import { Link } from 'react-router-dom';
export default function Navbar() {
    const username = localStorage.getItem('username');
    return (
        <>
            <div className="flex justify-between p-5 bg-text-shade text-white text-sm font-robot font-light border-b-2">
                <div className="logo">Logo</div>
                <div className="navigate flex justify-around">
                    <div className="posts mr-7 hover:text-base ease-in-out duration-300"><button><Link to={`#`}>Artist Posts</Link></button></div>
                    <div className="create mr-7 hover:text-base ease-in-out duration-300"><button><Link to={`#`}>Create A Post</Link></button></div>
                    <div className="album-reviews mr-7 hover:text-base ease-in-out duration-300"><button><Link to={`#`}>Album Reviews</Link></button></div>
                    <div className="profile mr-7 hover:text-base ease-in-out duration-300"><button><Link to={`/artist/${username}`}>Profile</Link></button></div>
                </div>
                <div className="logout hover:text-base ease-in-out duration-300"><button><Link to={`#`}>Logout</Link></button></div>
            </div>
        </>
    )
}