import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/details/:teamId' component={TeamDetails}/>
          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
