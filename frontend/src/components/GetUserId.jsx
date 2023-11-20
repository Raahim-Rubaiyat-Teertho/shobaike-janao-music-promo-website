export default async function fetchUserId (username, acc_type) {
    if(acc_type == 'artist') {
        try {
            const lnk = "http://127.0.0.1:8000/artist/artist-detail/" + username;
            const lnk_fetch = await fetch(lnk);
            const lnk_fetch_json = await lnk_fetch.json();
            return lnk_fetch_json.id;
        }
    
        catch (err) {
            console.log(err);
        }
    }

    else if(acc_type == 'audience') {
        try {
            const lnk = "http://127.0.0.1:8000/audience/audience-list/" + username;
            const lnk_fetch = await fetch(lnk);
            const lnk_fetch_json = await lnk_fetch.json();
            return lnk_fetch_json.id;
        }
    
        catch (err) {
            console.log(err);
        }
    }

}