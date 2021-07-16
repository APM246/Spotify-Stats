import querystring from 'querystring'

async function spotifyAjax(params: querystring.ParsedUrlQueryInput, accessToken: string, endpoint: string) {
    const queryParams = querystring.stringify(params);
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    }
    
    const URL = 'https://api.spotify.com/' + endpoint + '?' + queryParams;
    return (await fetch(URL, options)).json();
}

export default spotifyAjax;