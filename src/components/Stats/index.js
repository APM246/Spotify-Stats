import Artist from './artist'
import Playlist from './playlist';
import './index.css'

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
        <div className="stats-content">
            <Artist className="stat-left" accessToken={accessToken}> </Artist>
            <div className="stat-right">
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter any sentence and a Spotify playlist will be made with the songs matching the words in the
                        sentence. Avoid using prepositions (on, at, in, etc) since there aren't any songs with such names.
                        <br></br> <br></br>
                        <textarea value={value} onChange={(event) => {changeValue(event.target.value)}} />
                    </label>
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
                {isSubmitted && value && <Playlist accessToken={accessToken} sentence={value}> </Playlist>}
            </div>
        </div>
    )
}

export default Stats;