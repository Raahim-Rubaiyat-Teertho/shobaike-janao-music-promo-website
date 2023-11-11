import { Link } from "react-router-dom"
export default function ChooseLogin() {
    document.title = 'Login'
    return (
        <>
            <div className="flex items-center flex-col text-center justify-center min-h-screen min-w-screen bg-gradient-to-t from-blue-100 via-blue-200 to-blue-300">
                <h1 className="font-medium text-5xl font-serif tracking-tight text-text-shade">Do you want to login as an artist or an audience?</h1>
                <div className="buttons pt-7 text-center text-text-shade font-serif tracking-wider">
                    <Link to="/login/artist"><button className="px-2 py-1 w-20 rounded-md border-2 border-text-shade mr-5 text-center hover:text-white hover:bg-text-shade">Artist</button></Link>
                    <Link to="/login/audience"><button className="px-2 py-1 w-20 border-2 rounded-md border-text-shade text-center hover:text-white hover:bg-text-shade">Audience</button></Link>
                </div>
            </div>
        </>
    )
}