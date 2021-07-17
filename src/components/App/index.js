import Login from '../Login'
import Stats from '../Stats'
import Navbar from './navbar'

const querystring = require('querystring');

function App() {
  // changed to loggedIn state variable passed down to login
  const result = window.location.hash.substring(1);
  const auth = querystring.parse(result);

  let page;

  if (!result) {
    page = (
      <div className="App">
        <p> Welcome </p>
        <Login> </Login>
      </div>
    )
  }

  else page = (
    <div className="App">
      <Stats auth={auth}> </Stats>
    </div>
  )

  return (
    <Navbar>
      {page}
    </Navbar>
  )
}

export default App;
