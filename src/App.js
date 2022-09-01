import { Routes, Route, useLocation } from 'react-router-dom';
import ClassDetails from "./views/ClassDetails";
import Home from "./views/Home";
import Schedule from "./views/Schedule";
import SearchView from "./views/SearchView";
import SignInView from "./views/SignInView";
import WelcomeView from "./views/WelcomeView";

function App() {
  const location = useLocation()
  return (
    <>
      <Routes location={location} key={location.key}>
        <Route path='/home' element={<Home />}/>
        <Route path='/classdetails' element={<ClassDetails />}/>
        <Route path='/schedule' element={<Schedule />}/>
        <Route path='/search' element={<SearchView />}/>
        <Route path='/signin' element={<SignInView />}/>
        <Route path='/' element={<WelcomeView />}/>
      </Routes>
    </>
  );
}

export default App;
