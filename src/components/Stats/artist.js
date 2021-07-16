import { useState, useEffect } from 'react';
import spotifyAjax from '../../lib/ajax';

const Artist = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState({});

    const params = {
        LIMIT: 5, 
        TIME_TANGE: "long_term"
    }

    const endpoint = 'v1/me/top/artists';      

    useEffect(() => {
        spotifyAjax(params, props.accessToken, endpoint)
        .then(
            (res) => {
                setResult(res);
                setIsLoaded(true);
            }, (error) => {
                console.log(`Error message is ${error.message}`);
            }
        )
    })

    if (!isLoaded) return <p> Loading... </p>
    else return (
        <div>
            <p> Your top 5 artists are </p>
            <ol> 
                {result.items.map((item) => 
                    <li> {item.name} </li>)}
            </ol>
        </div>
    )
}

export default Artist;