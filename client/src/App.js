/* eslint-disable comma-spacing */

import React, { useState, useEffect } from 'react';
import { Login } from './pages';
import Home from './pages/Home';

function App() {
  const [authUser, setAuthUser] = useState('');
  useEffect(() => { } ,[authUser]);
  return (
    <div>
      {(authUser) ? <Home /> : <Login setUser={setAuthUser} />}
    </div>
  );
}

export default App;
