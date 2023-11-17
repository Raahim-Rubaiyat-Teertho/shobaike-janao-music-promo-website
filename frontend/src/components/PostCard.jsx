import FindArtistById from "./FindArtistById";

export default function PostCard(props) {

    return (
        <>
            {   
                props.d.slice().reverse().map(
                    (i) => (
                        <div key={i.id} className="m-6 mb-16 border-2 border-gray-400 shadow-lg p-4 mx-32 rounded-md">
                            <h1 className="font-robot font-thin pb-5">{<FindArtistById id = {i.posted_by}/>}</h1>
                            <p className="font-robot font-light">{i.body}</p>
                        </div>
                    )
                )
            }
        </>
    )
}