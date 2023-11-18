import { useEffect, useState } from "react";
import FindArtistById from "./FindArtistById";

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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-6 h-6 mr-2">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
                            </svg>

                            <p>{i.upvotes}</p>
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