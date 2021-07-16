import spotifyAjax from "../../lib/ajax";

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
                        limit: 1
                    }

                    promises.push(spotifyAjax(params, accessToken, 'v1/search')
                    .then((res) => {
                        let songObject = res;
                        const songId = songObject.tracks.items[0].uri;
                        song_list[i] = songId; // note arrays in Javascript use dynamic allocation
                    }));
                }

                Promise.all(promises)
                .then(() => {
                    let uris = "";
                    for (let j = 0; j < song_list.length; j++) {
                        uris += song_list[j] + ",";
                    }

                    // add songs to playlist
                    let params = {
                        "uris": uris.substring(0, uris.length - 1)
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
        <div> Newly generated playlist URL: {playlist.external_urls.spotify} </div>
    )

    else return null;
}

export default Playlist;