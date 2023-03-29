
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Loading from './components/loading/loader';
import Login from './components/login';
import Register from './components/register';
import Logout from './components/User/logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route >
      <Loading/>
     <Login/>
     <Register/>
     <Logout/>
      </Route>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
