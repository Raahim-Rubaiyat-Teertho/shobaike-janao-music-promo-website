import { useEffect, useState } from "react"
import ArtistProfile from "../Profile Pages/ArtistProfile";
import { Navigate } from "react-router";

export default function ArtistLogin() {
    document.title = 'Login | Artist'

    const [data, setData] = useState({email : '', password : ''});
    const [wrongCred, setWrongCred] = useState(false);

    const handleArtistLogin = async (e) => {
        e.preventDefault();

        let link_fetch = 'http://127.0.0.1:8000/artist/artist-detail-email/' + data.email;

        try {
            const res = await fetch(link_fetch);
            const res_json = await res.json();
            
            if(res_json.password != data.password) {
                setWrongCred(true);
            }

            else {
                // Fetch for session
                
                window.location.href = '/artist/' + res_json.name;
            }
        }

        catch(err){
            setWrongCred(true);
        }
    } 

    return (
        <>
            <div className="flex items-center flex-col text-center justify-center min-h-screen min-w-screen bg-gradient-to-t from-blue-100 via-blue-200 to-blue-300">
                <div className="container border-2 border-text-shade w-fit p-7 rounded-lg">
                <h1 className="font-medium text-3xl font-serif tracking-tight text-text-shade">Login | Artist</h1>

                <div className="form-part font-serif" onSubmit={handleArtistLogin}>
                    <form className="flex items-center flex-col text-center justify-center pt-6">
                        {
                            wrongCred ? (
                                <>
                                <input type="email" placeholder="Enter your email" className="text-center m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-red-600 border-t-0 border-l-0 border-r-0" value={data.email} onChange={(e) => setData({...data, email : e.target.value})}/>
                                <input type="password" placeholder="Enter your password" className="text-center m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-red-600 border-t-0 border-l-0 border-r-0" value={data.password} onChange={(e) => setData({...data, password : e.target.value})}/>        
                                <ul>
                                    <li className="list-disc text-sm text-red-600">Invalid Email or Password</li>
                                </ul>
                                </>
                            ) :

                            (<>
                                <input type="email" placeholder="Enter your email" className="text-center m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0" value={data.email} onChange={(e) => setData({...data, email : e.target.value})}/>
                                <input type="password" placeholder="Enter your password" className="text-center m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0" value={data.password} onChange={(e) => setData({...data, password : e.target.value})}/>
                            </>)
                        }
                        <button className="px-2 py-1 w-20 border-2 rounded-md border-text-shade text-center hover:text-white hover:bg-text-shade mt-4">Submit</button>
                    </form>
                </div>
                </div>
            </div>

        </>
    )
}