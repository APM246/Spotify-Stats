const querystring = require('querystring');

function Login() {
  const params = {
    client_id: "f05da3e4435c4986bf61dc10c0d58ec4",
    redirect_uri: "http://localhost:3000/",
    scope: 'user-read-private user-read-email user-top-read',
    response_type: "token"
  }

  const encoded_params = querystring.stringify(params);
  const URL = "https://accounts.spotify.com/authorize?" + encoded_params

  return (
    <a href={URL}> Login here </a>
  )
}

export default Login;