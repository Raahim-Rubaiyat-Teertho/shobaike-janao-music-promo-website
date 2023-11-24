import { useEffect, useState } from "react";
import FindArtistById from "./FindArtistById";
import GetUpvotes from "./GetUpvotes";

export default function PostCard(props) {
    const [artist, setArtist] = useState(false)
    const [hoverStates, setHoverStates] = useState(Array(props.d.length).fill(false));
    const acc_type = localStorage.getItem('acc_type');
    const username = localStorage.getItem('username');
    const [id, setId] = useState();
    

    const handleMouseEnter = (index) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = true;
        setHoverStates(newHoverStates);
      };

    const handleMouseLeave = (index) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = false;
        setHoverStates(newHoverStates);
      };

    const userID = async () => {
        try {
            const lnk = "http://127.0.0.1:8000/artist/artist-detail/" + username;
            const lnk_fetch = await fetch(lnk);
            const lnk_fetch_json = await lnk_fetch.json();
            setId(lnk_fetch_json.id)
        }
    
        catch (err) {
            console.log(err);
        }
    }

    const handlePostDelete = async (id) => {
        const shouldDelete = window.confirm('Are you sure you want to delete this post?');

        if(!shouldDelete) {
            alert('The post was not deleted');
            return;
       }

       else {
        
        const u = `http://127.0.0.1:8000/artist/posts/delete/${id}`;

        const u_fetch = await fetch(u, {
            method: 'DELETE'
        });
        props.setDeletedPost(true);
       }

    }

    useEffect(
        () => {
            if(acc_type == 'artist') {
                setArtist(true)
            }
        }, []
    )
    
    useEffect(
        () => {
            userID();
        }, []
    )
    return (
        <>
            {   
                props.d.slice().reverse().map(
                    (i, index) => (
                        <div key={i.id} className="m-6 mb-16 border-2 border-gray-400 shadow-lg p-4 mx-32 rounded-md" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                            <h1 className="font-robot font-light pb-5"><strong>{<FindArtistById id = {i.posted_by}/>}</strong></h1>
                            <p className="font-robot font-light">{i.body}</p>
                            <div className="upvotes flex mt-5">
                            <GetUpvotes id = {i.id}/>
                            </div>
                            

                            {
                                artist && hoverStates[index] && (id === i.posted_by) && (
                                    <div className="btns mt-5">
                                        <button className="p-2 mr-3 bg-gray-600 text-white rounded-md text-sm hover:bg-red-700" onClick={() => handlePostDelete(i.id)}>Delete</button>
                                    </div>
                                )
                            }
                        </div>
                    )
                )
            }
        </>
    )
}