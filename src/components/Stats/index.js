import Artist from './artist'
import Playlist from './playlist';

import { useState } from 'react'

const Stats = (props) => {
    const accessToken = props.auth.access_token;

    const [value, changeValue] = useState('');
    const [isSubmitted, changeIsSubmitted] = useState(false);

    function handleSubmit(event) {
        changeIsSubmitted(true);
        event.preventDefault();
    }
    
    return (
        <div className="flex">
            <Artist accessToken={accessToken}> </Artist>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter any sentence and a Spotify playlist will be made with the songs matching the words in the
                        sentence.
                        <textarea value={value} onChange={(event) => {changeValue(event.target.value)}} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {isSubmitted && <Playlist accessToken={accessToken} sentence={value}> </Playlist>}
            </div>
        </div>
    )
}

export default Stats;