import { useEffect, useState } from "react";
import FindArtistById from "./FindArtistById";
import GetUpvotes from "./GetUpvotes";

export default function PostCard(props) {
    const [artist, setArtist] = useState(false)
    const [hoverStates, setHoverStates] = useState(Array(props.d.length).fill(false));

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

    useEffect(
        () => {
            if(props.type == 'account') {
                setArtist(true)
            }
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
                                artist && hoverStates[index] &&(
                                    <div className="btns mt-5">
                                        <button className="p-2 mr-3 bg-gray-600 text-white rounded-md text-sm">Update</button>
                                        <button className="p-2 mr-3 bg-gray-600 text-white rounded-md text-sm">Delete</button>
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