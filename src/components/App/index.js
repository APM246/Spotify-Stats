import Login from '../Login'
import Stats from '../Stats'

const querystring = require('querystring');

function App() {
  const result = window.location.hash.substring(1);
  const auth = querystring.parse(result);

  if (!result) {
    return (
      <div className="App">
        <p> Welcome </p>
        <Login> </Login>
      </div>
    );
  }

  else return (
    <div className="App">
      <Stats auth={auth}> </Stats>
    </div>
  )
}

export default App;
