
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Loading from './components/loading/loader';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Logout from './components/user/Logout';
import StudentRegistration from './components/forminput/StudentRegistration';
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
     <StudentRegistration/>
     <Courses/>
      </Route>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
