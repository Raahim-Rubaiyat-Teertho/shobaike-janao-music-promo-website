import { useState } from "react";

export default function ArtistSignup() {
    document.title = 'Signup | Artist'
    // const handleArtistSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://127.0.0.1:8000/artist/signup/', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(data),
    //         });

    //         if (response.ok) {
    //             const responseData = await response.json();
    //             console.log(responseData);
    //             window.location.href = "http://localhost:5173/login/artist"
    //           } else {
    //             alert('There has been an error. Please try again.')
    //           }

    //     }

    //     catch (error) {
    //         // Handle network or other errors
    //         console.error('Error:', error);
    //     }

    // }

    const handleArtistSubmit2 = async (e) => {
        e.preventDefault();
        let check = 'http://127.0.0.1:8000/artist/artist-detail-email/' + data.email;

        try{
            const res = await fetch(check);
            const res_json = await res.json();
            alert('The email address is already taken. Use another email address.')
        }

        catch {
            const response = await fetch('http://127.0.0.1:8000/artist/signup/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });

            if(response.ok) {
                window.location.href = "http://localhost:5173/login/artist";
            }

            else {
                alert('There has been an error. Please try again.');
            }
        }
        
        
    }
    const [data, setData] = useState({name : '', password : '', email : '', location: '', bio : '', genre : ''})

    return (
        <>
            <div className="flex items-center flex-col text-center justify-center min-h-screen min-w-screen bg-gradient-to-t from-blue-100 via-blue-200 to-blue-300">
                <div className="container border-2 border-text-shade w-fit p-10 rounded-lg">
                    <h1 className="font-medium text-3xl font-serif tracking-tight text-text-shade">Join As An Artist!</h1>

                    <div className="form-part">
                        <form className="flex items-center flex-col text-center justify-center pt-6" onSubmit={handleArtistSubmit2} method="POST">
                            <input type="email" placeholder="Email" className="m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0" name="email" id="email-artist" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                            <input type="text" placeholder="Your Band's Name" className="m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0" name="name" id="name-artist" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
                            <input type="password" placeholder="Choose a password" className="m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0" name="pass" id="pass-artist" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                            <input type="text" placeholder="Which city are you from?" className="m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0" name="location" id="location-artist" value={data.location} onChange={(e) => setData({...data, location: e.target.value})}/>
                            <input type="text" placeholder="What is your genre?" className="m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0" name="genre" id="genre-artist" value={data.genre} onChange={(e) => setData({...data, genre: e.target.value})}/>
                            <button className="px-2 py-1 w-20 border-2 rounded-md border-text-shade text-center hover:text-white hover:bg-text-shade mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}