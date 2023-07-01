import React, { useState } from 'react';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {!loggedIn ? <SignIn handleLogin={handleLogin} /> : <Dashboard />}
    </div>
  );
}

export default App;
