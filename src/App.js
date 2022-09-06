import { Routes, Route, useLocation } from 'react-router-dom';
import ClassDetails from "./views/ClassDetails";
import Home from "./views/Home";
import Schedule from "./views/Schedule";
import SearchView from "./views/SearchView";
import SignInView from "./views/SignInView";
import WelcomeView from "./views/WelcomeView";
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { StateContext } from './context/Context';

function App() {
  const { userToken, setUserData } = useContext(StateContext)
  const config = {
    headers: { Authorization: `Bearer ${userToken.token}` }
  };
  useEffect(() => {
    if(userToken){
      axios.get(`http://localhost:4000/api/v1/users/${userToken.userId}`, config)
      .then(response => setUserData(response.data))
    }
  }, [userToken])

  const location = useLocation()
  return (
    <>
      <Routes location={location} key={location.key}>
        <Route path='/home' element={<Home />}/>
        <Route path='/classdetails/:id' element={<ClassDetails />}/>
        <Route path='/schedule' element={<Schedule />}/>
        <Route path='/search' element={<SearchView />}/>
        <Route path='/signin' element={<SignInView />}/>
        <Route path='/' element={<WelcomeView />}/>
      </Routes>
    </>
  );
}

export default App;
