import spotifyAjax from "../../lib/ajax";
import findClosestMatch from '../../lib/fuzzy'

import { useState, useEffect } from 'react'

const Playlist = ({ sentence, accessToken }) => {
    const [isLoaded, changeIsLoaded] = useState(false);
    const [playlist, changePlaylist] = useState({});

    const words = sentence.split(" ");

    useEffect(() => {
        spotifyAjax(null, accessToken, 'v1/me')
        .then((res) => {
            let user = res.id;

            let body = {
                name: sentence,
                public: true, 
                description: `Playlist featuring songs with names from the sentence '${sentence}'`
            }

            // create playlist
            spotifyAjax(null, accessToken, `v1/users/${user}/playlists`, "POST", body, false)
            .then((res) => {
                changePlaylist(res);
                let playlistObj = res;
                let song_list = [];
                let promises = [];

                for (let i = 0; i < words.length; i++) {
                    let params = {
                        q: `"${words[i]}"`,
                        type: "track",
                        limit: 50
                    }

                    promises.push(spotifyAjax(params, accessToken, 'v1/search')
                    .then((res) => {
                        const fuseMatch = findClosestMatch(res.tracks.items, words[i], ['name']);
                        song_list[i] = fuseMatch.item.uri; // note arrays in Javascript use dynamic allocation
                    }));
                }

                Promise.all(promises)
                .then(() => {
                    // add songs to playlist
                    let params = {
                        "uris": song_list.join(',') 
                    }

                    spotifyAjax(params, accessToken, `v1/playlists/${playlistObj.id}/tracks`, "POST")
                    .then(() => {
                        changeIsLoaded(true);
                    })
                })
            })
        })
    }, [])

    if (isLoaded) return (
        <div className="url"> 
            Here's the <a href={playlist.external_urls.spotify}> playlist
            </a>. Alternatively have a look at the playlists on your profile. 
        
        </div>
    )

    else return null;
}

export default Playlist;