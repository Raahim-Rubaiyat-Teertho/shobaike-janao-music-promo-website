import { Link } from "react-router-dom"

export default function Home () {
    document.title = 'Shobaike Janao'
    return (
        <>
            <div className="flex items-center flex-col text-center justify-center min-h-screen min-w-screen bg-gradient-to-t from-pink-200 via-blue-200 to-blue-300">
                <h1 className="font-medium text-7xl font-serif tracking-tight text-text-shade">Shobaike Janao!</h1>
                <div className="artist pt-7  font-serif text-text-shade">
                    <h2 className="tracking-wider text-2xl">Are You An Artist?</h2>
                    <h3 className="tracking-wider">Share your music with the world! </h3>
                </div>

                <div className="user font-serif pt-7 text-text-shade">
                    <h2 className="tracking-wider text-2xl">Are you a passionate listener?</h2>
                    <h3 className="tracking-wider">Let everyone know your thoughts!</h3>
                </div>

                <div className="buttons pt-7 text-center text-text-shade font-serif tracking-wider">
                    <Link to="/login"><button className="px-2 py-1 w-20 rounded-md border-2 border-text-shade mr-5 text-center hover:text-white hover:bg-text-shade">Login</button></Link>
                    <Link to="/signup"><button className="px-2 py-1 w-20 border-2 rounded-md border-text-shade text-center hover:text-white hover:bg-text-shade">Signup</button></Link>
                </div>
            </div>
            
        </>
    )
}