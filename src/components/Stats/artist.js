import { useState, useEffect } from 'react';

const Artist = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState({});

    const LIMIT = 5;
    const URL = `https://api.spotify.com/v1/me/top/artists?limit=${LIMIT}`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${props.accessToken}`,
        }
    }        

    useEffect(() => {
        fetch(URL, options)
        .then(response => response.json())
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