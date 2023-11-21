import { useEffect, useState } from "react";
import fetchUserId from "./GetUserId";


export default function GetUpvotes (props) {
    const uname = localStorage.getItem('username');
    const lnk = "http://127.0.0.1:8000/artist/posts/upvotes/" + props.id;

    const [votes, setVotes] = useState(0)
    const [artistsvoted, setArtistsVoted] = useState();
    const [audiencesVoted, setAudiencesVoted] = useState();

    const [voted, setVoted] = useState(false);

    const [jsonData, setJsonData] = useState();

    const acc_type = localStorage.getItem('acc_type');
    

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
                setArtistsVoted(post.voted_by_artists);
                setAudiencesVoted(post.voted_by_audiences);
                setVotes(total);
            }
    
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(
        () => {
            fetchUpvotes();
            console.log(artistsvoted)
        }, []
    )

    useEffect(() => {
        let isMounted = true;
      
        const fetchData = async () => {
          try {
            const artist_id = await fetchUserId(uname, acc_type);
            
            if(acc_type == 'artist') {
                if (isMounted) {
                    artistsvoted.map(
                      (i) => {
                          if(i == artist_id) {
                              setVoted(true)
                          }
                      }
                    )
                  }
            }

            else if(acc_type == 'audience') {
                if (isMounted) {
                    audiencesVoted.map(
                      (i) => {
                          if(i == artist_id) {
                              setVoted(true)
                          }
                      }
                    )
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
      }, [artistsvoted]);

    const handleVoteChange = async () => {
        setVoted(!voted)
        if(localStorage.getItem('acc_type') == 'artist') {
            if(votes >= 0){
                console.log('here')
                const artist_id = await fetchUserId(uname, acc_type);

                artistsvoted.push(artist_id)

                const newData = {
                    ...jsonData,
                    voted_by_artists : artistsvoted
                }
                
                const l = "http://127.0.0.1:8000/artist/posts/update-upvotes/" + props.id;
                const res = await fetch(l, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData)
            })
            console.log(jsonData)
            }

            else {
                //just post new data
            }
        }

        else {
            //handle for audiences
        }
    } 


    return (
        <>
            {
                voted ? <button onClick={handleVoteChange}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-8 h-8 mr-2 hover:animate-bounce ease-in-out duration-300">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
                </svg>
            </button> :
            <button onClick={handleVoteChange}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-8 h-8 mr-2 hover:animate-bounce ease-in-out duration-300">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
            </svg>
            </button>
            }

            <p>{votes}</p>
        </>
    )
}