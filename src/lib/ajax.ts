import querystring from 'querystring'

async function spotifyAjax(params: querystring.ParsedUrlQueryInput, accessToken: string, endpoint: string,
    method: "GET" | "POST" = "GET", body?: object, contentType: boolean = false) {
    const queryParams: string = params ? '?' + querystring.stringify(params) : '';

    let header;

    if (contentType) {
        header = {
            'Authorization': `Bearer ${accessToken}`,
            "Content-Type": 'application/json'
        }
    }

    else {
        header = {
            'Authorization': `Bearer ${accessToken}`
        }
    }

    const options: any = {
        method: method,
        headers: header
    }

    if (typeof body !== 'undefined') {
        options.body = JSON.stringify(body);
    }
    
    const URL: string = `https://api.spotify.com/${endpoint}${queryParams}`;

    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export default spotifyAjax; 