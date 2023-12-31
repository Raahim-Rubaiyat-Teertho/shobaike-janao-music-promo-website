import { useState } from "react";

export default function AudienceSignup() {
    document.title = 'Signup | Audience';
    
    const [data, setData] = useState({email : '', username : '', password : '', followed_artists : []})

    const handleAudienceSubmit = async (e) => {
        e.preventDefault();
        let check = "http://127.0.0.1:8000/audience/audience-list-email/" + data.email
        
        try {
            const res = await fetch(check);
            const res_json = await res.json();
            alert('The email address is already taken. Use another email address.')
        }

        catch {
            const res = await fetch("http://127.0.0.1:8000/audience/signup/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if(res.ok) {
                window.location.href = "http://localhost:5173/login/audience";
            }

            else {
                alert('There has been an error. Please try again.');
            }
        }
    }
    return (
        <>
            <div className="flex items-center flex-col text-center justify-center min-h-screen min-w-screen bg-gradient-to-t from-blue-100 via-blue-200 to-blue-300">
                <div className="container border-2 border-text-shade w-fit p-7 rounded-lg">
                    <h1 className="font-medium text-3xl font-serif tracking-tight text-text-shade">Join As An Audience!</h1>

                    <div className="form-part">
                        <form className="flex items-center flex-col text-center justify-center pt-6" onSubmit={handleAudienceSubmit}>
                            <input type="email" placeholder="Enter your email" className="m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0" value={data.email} onChange={(e) => setData({...data, email : e.target.value})}/>
                            <input type="text" placeholder="Choose a username" className="m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0" value={data.username} onChange={(e) => setData({...data, username : e.target.value})}/>
                            <input type="password" placeholder="Choose a password" className="m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0" value={data.password} onChange={(e) => setData({...data, password : e.target.value})}/>
                            <button className="px-2 py-1 w-20 border-2 rounded-md border-text-shade text-center hover:text-white hover:bg-text-shade mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}