import { useState, useEffect } from "react";

export default function CreatePost(props) {
  const [data, setData] = useState({ body: '', posted_by: '', upvotes: 0});
  const [artistId, setArtistId] = useState();
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchArtistId = async () => {
      try {
        const u_id = `http://127.0.0.1:8000/artist/artist-detail/${username}`;
        const u_id_fetch = await fetch(u_id);
        const u_id_json = await u_id_fetch.json();
        setArtistId(u_id_json.id);
      } catch (error) {
        console.error("Error fetching artist ID:", error);
      }
    };

    if (username) {
      fetchArtistId();
    }
  }, [username]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/artist/posts/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, posted_by: artistId }),
      });

      // Check response status or handle accordingly
      if (response.ok) {
        // Reset the form after successful submission
        setData({ posted_by: '', body: '', upvotes: '' });
      } else {
        console.error("Error submitting post:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <div>
      <div className="w-full mt-5 px-24">
        <form className="flex flex-col" onSubmit={handlePostSubmit}>
          <textarea
            name="create-post"
            id="create-post"
            cols="30"
            rows="5"
            className="resize-none mt-5 w-full shadow-md border-2 rounded-lg border-text-shade placeholder:font-robot font-light p-2"
            placeholder="Create a post..."
            onChange={(e) => setData({ ...data, body: e.target.value })}
          ></textarea>
          <div className="btn flex justify-end">
            <button
              className="mt-5 mr-2 px-2 py-1 border-2 border-text-shade rounded-md w-20 font-robot hover:bg-text-shade hover:text-white"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
