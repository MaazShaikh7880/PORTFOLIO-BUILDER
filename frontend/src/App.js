import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Landingpage from './Pages/Landingpage';
import Templatespage from './Pages/Templates';
import Login from './Pages/Login'
import Signin from './Pages/Signin';
import LoginCard from './components/LoginCard.jsx'
// import BasicInfo from './components/BasicInfo';
import Userdata from './Pages/Userdata';
import Navbar from './components/Navbar';
import Template1 from './template1/Template.js';
import Test from './components/Test.jsx';
// 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic and set isLoggedIn to true upon successful login
    setIsLoggedIn(true);
  };

  return (
    // <div>
    //   <Test/>
    // </div>
    <div>
      <Router>
        {isLoggedIn ? (
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Landingpage />} />
              <Route path='/templates' element={<Templatespage />} />
              <Route path='/userr' element={<Userdata />} />
              <Route path='/main' element={<Template1 />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route
              path='/'
              element={<LoginCard onLogin={handleLogin} />}

            />
            <Route path='/signin' element={<Signin />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}


export default App;