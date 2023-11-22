import { useEffect, useState } from "react";
import axios from "axios";
import fetchUserId from "./GetUserId";

export default function GetUpvotes(props) {
    const uname = localStorage.getItem("username");
    const lnk = `http://127.0.0.1:8000/artist/posts/upvotes/${props.id}`;

    const [votes, setVotes] = useState(0);
    const [artistsvoted, setArtistsVoted] = useState([]);
    const [audiencesVoted, setAudiencesVoted] = useState([]);
    const [voted, setVoted] = useState(false);
    const [jsonData, setJsonData] = useState([]);
    const [hvcRan, setHvcRan] = useState(false);
    const acc_type = localStorage.getItem("acc_type");

    const fetchUpvotes = async () => {
        try {
            const lnk_fetch = await fetch(lnk);
            const lnk_json = await lnk_fetch.json();
            console.log(lnk_json);
            setJsonData(lnk_json);

            if (lnk_json && lnk_json.length > 0) {
                const post = lnk_json[0];
                const artist_count = post.voted_by_artists ? post.voted_by_artists.length : 0;
                const audience_count = post.voted_by_audiences ? post.voted_by_audiences.length : 0;
                const total = artist_count + audience_count;
                setArtistsVoted(post.voted_by_artists || []);
                setAudiencesVoted(post.voted_by_audiences || []);
                setVotes(total);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUpvotes();
        console.log(artistsvoted);

    }, [props.id, hvcRan]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const artist_id = await fetchUserId(uname, acc_type);

                if (acc_type === "artist") {
                    if (isMounted) {
                        artistsvoted.forEach((i) => {
                            if (i === artist_id) {
                                setVoted(true);
                            }
                        });
                    }
                } else if (acc_type === "audience") {
                    if (isMounted) {
                        audiencesVoted.forEach((i) => {
                            if (i === artist_id) {
                                setVoted(true);
                            }
                        });
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [artistsvoted, uname, acc_type, audiencesVoted]);

    const handleVoteChange = async (e) => {
        e.preventDefault();
        setVoted(!voted);

        if (localStorage.getItem("acc_type") === "artist") {
            if(voted == false){
                try {
                    console.log("here");
                    const artist_id = await fetchUserId(uname, acc_type);

                    artistsvoted.push(artist_id);
                    console.log(artistsvoted);

                    const newData = {
                        post : props.id,
                        voted_by_artists: artistsvoted,
                        voted_by_audiences: audiencesVoted
                    };
                    console.log(newData);

                    axios
                        .put(`http://127.0.0.1:8000/artist/posts/update-upvotes/${props.id}`, newData)
                        .then((res) => {
                            console.log(res);
                            setHvcRan(!hvcRan);
                        });
                    console.log(jsonData);
                } catch (err) {
                    console.log(err);
                }


            }

            else {
                try {
                    console.log("here");
                    const artist_id = await fetchUserId(uname, acc_type);

                    const updatedArtistsVoted = artistsvoted.filter(id => id !== artist_id);
                    console.log(updatedArtistsVoted);

                    const newData = {
                        post : props.id,
                        voted_by_artists: updatedArtistsVoted,
                        voted_by_audiences: audiencesVoted
                    };
                    console.log(newData);

                    axios
                        .put(`http://127.0.0.1:8000/artist/posts/update-upvotes/${props.id}`, newData)
                        .then((res) => {
                            console.log(res);
                            setHvcRan(!hvcRan);
                        });
                    console.log(jsonData);
                } catch (err) {
                    console.log(err);
                }
            }
                

        } else {
            // Handle for audiences (if needed)
        }
    };

    return (
        <>
            {voted ? (
                <form method="post" onSubmit={handleVoteChange}>
                    <button type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="green"
                            className="w-8 h-8 mr-2 hover:animate-bounce ease-in-out duration-300"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </form>
            ) : (
                <form method="post" onSubmit={handleVoteChange}>
                    <button type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="black"
                            className="w-8 h-8 mr-2 hover:animate-bounce ease-in-out duration-300"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </form>
            )}

            <p>{votes}</p>
        </>
    );
}
