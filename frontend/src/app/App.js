
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Loading from './components/loading/loader';
import Login from './components/User/login';
import Register from './components/User/register';
import Logout from './components/User/logout';
import Registration from './components/forminput/Registration';
import Courses from './components/forminput/Courses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route >
      <Loading/>
     <Login/>
     <Register/>
     <Logout/>
     <Registration/>
     <Courses/>
      </Route>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
