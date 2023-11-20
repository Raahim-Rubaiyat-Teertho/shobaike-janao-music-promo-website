import { useState } from "react"

export default function AudienceLogin() {
    document.title = "Login | Audience"

    const [data, setData] = useState({email : '', password : ''});
    const [wrongCred, setWrongCred] = useState(false);

    const handleAudienceLogin = async (e) => {
        e.preventDefault();
        const lnk = "http://127.0.0.1:8000/audience/audience-list-email/" + data.email;
        try{
            const lnk_fetch = await fetch(lnk);
            const lnk_json = await lnk_fetch.json();

            if(lnk_json.password == data.password && lnk_json.email == data.email) {
                localStorage.setItem('username', lnk_json.username);
                const acc_type = 'audience'
                localStorage.setItem('acc_type', acc_type);
                window.location.href = '/audience/' + lnk_json.username;
            }

            else {
                setWrongCred(true);
            }
            
        }

        catch(err) {
            setWrongCred(true);
        }
    }

    return (
        <>
            <div className="flex items-center flex-col text-center justify-center min-h-screen min-w-screen bg-gradient-to-t from-blue-100 via-blue-200 to-blue-300">
                <div className="container border-2 border-text-shade w-fit p-7 rounded-lg">
                <h1 className="font-medium text-3xl font-serif tracking-tight text-text-shade">Login | Audience</h1>

                <div className="form-part font-serif">
                    <form className="flex items-center flex-col text-center justify-center pt-6" onSubmit={handleAudienceLogin}>
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