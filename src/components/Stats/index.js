import Artist from '../Stats/artist'

const Stats = (props) => {
    const accessToken = props.auth.access_token;
    console.log("The token is " + accessToken);
    
    return (
        <div>
            <Artist accessToken={accessToken}> </Artist>
        </div>
    )
}

export default Stats;