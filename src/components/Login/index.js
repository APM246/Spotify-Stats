const querystring = require('querystring');

function Login() {
  const params = {
    client_id: "f05da3e4435c4986bf61dc10c0d58ec4",
    redirect_uri: "http://ec2-13-239-60-176.ap-southeast-2.compute.amazonaws.com:5001/",
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
