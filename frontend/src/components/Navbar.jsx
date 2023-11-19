import { Link } from 'react-router-dom';
export default function Navbar(props) {
    const username = localStorage.getItem('username');
    return (
        <>
            <div className="flex justify-between bg-text-shade text-white text-sm font-robot font-light border-b-2">
                <div className="logo pt-5 pl-4 pb-4">Shobaike Janao!</div>
                <div className="navigate flex justify-around">
                    <div className="posts mr-2 hover:bg-slate-800 hover:border-b-2 hover:border-white ease-in-out"><Link to={'/posts/artists'}><button className='pt-4 pb-3 px-4'>Artist Posts</button></Link></div>
                    {/* <div className="create mr-7 hover:text-base ease-in-out duration-300"><button><Link to={`#`}>Create A Post</Link></button></div> */}
                    <div className="album-reviews mr-2 hover:bg-slate-800 hover:border-b-2 hover:border-white ease-in-out"><Link to={`#`}><button className='pt-4 pb-3 px-4'>Album Reviews</button></Link></div>
                    <div className="profile mr-2 hover:bg-slate-800 hover:border-b-2 hover:border-white ease-in-out"><Link to={`/${props.type}/${username}`}><button className='pt-4 pb-3 px-4'>Profile</button></Link></div>
                </div>
                <div className="logout pt-5 mr-4"><button><Link to={'/artist/logout'}>Logout</Link></button></div>
            </div>
        </>
    )
}