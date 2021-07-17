import { useState, useEffect } from 'react';
import spotifyAjax from '../../lib/ajax';

const Artist = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState({});

    const params = {
        limit: 5, 
        time_range: "long_term"
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
    }, [])

    if (!isLoaded) return <p> Loading... </p>
    else return (
        <div className={props.className}>
            Your top 5 artists are:
            <ol> 
                {result.items.map((item) => 
                    <li key={item.name}> {item.name} </li>)}
            </ol>
        </div>
    )
}

export default Artist;