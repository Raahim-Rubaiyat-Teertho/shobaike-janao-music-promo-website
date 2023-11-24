import { useEffect, useState } from "react";
import FindAudienceById from "./FindAudienceById";
import GetUpvotes from "./GetUpvotes";
import GetUserUpvotes from "./GetUserUpvotes";
import fetchUserId from "./GetUserId";

export default function AudiencePostCard(props) {
    const [audience, setAudience] = useState(false)
    const [hoverStates, setHoverStates] = useState(Array(props.d.length).fill(false));
    const acc_type = localStorage.getItem('acc_type');
    const username = localStorage.getItem('username');
    
    const [id, setId] = useState()

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
            const lnk = "http://127.0.0.1:8000/audience/audience-list/" + username;
            const lnk_fetch = await fetch(lnk);
            const lnk_fetch_json = await lnk_fetch.json();
            setId(lnk_fetch_json.id)
        }
    
        catch (err) {
            console.log(err);
        }
    }

    const handleAudiencePostDelete = async (id) => {
        const shouldDelete = window.confirm('Are you sure you want to delete this post?');

        if(!shouldDelete) {
            alert('The post was not deleted');
            return;
       }

       else {
        
        const u = `http://127.0.0.1:8000/audience/posts/delete/${id}`;

        const u_fetch = await fetch(u, {
            method: 'DELETE'
        });
        props.setDeletedPost(true);
       }

    }

    useEffect(
        () => {
            if(acc_type == 'audience') {
                setAudience(true)
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
                            <h1 className="font-robot font-light pb-5"><strong>{<FindAudienceById id = {i.posted_by}/>}</strong></h1>
                            <p className="font-robot font-light">{i.body}</p>
                            <div className="upvotes flex mt-5">
                            <GetUserUpvotes id = {i.id}/>
                            </div>
                            

                            {
                                audience && hoverStates[index] && (id === i.posted_by) && (
                                    <div className="btns mt-5">
                                        <button className="p-2 mr-3 bg-gray-600 text-white rounded-md text-sm hover:bg-red-700" onClick={() => handleAudiencePostDelete(i.id)}>Delete</button>
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