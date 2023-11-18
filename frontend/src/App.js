import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Landingpage from './Pages/Landingpage';
import Templatespage from './Pages/Templates';
import Login from './Pages/Login'
import Signin from './Pages/Signin';
import LoginCard from './components/LoginCard.jsx'

import Userdata from './Pages/Userdata';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic and set isLoggedIn to true upon successful login
    setIsLoggedIn(true);
  };

  return (
    
    <div>
      <Router>
        {isLoggedIn ? (
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Landingpage />} />
              <Route path='/templates' element={<Templatespage />} />
              <Route path='/userr' element={<Userdata />} />
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