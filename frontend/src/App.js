import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const [protectedMessage, setProtectedMessage] = useState('');

  const handleRegister = async () => {
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    setMessage(data.message);
  };

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    setMessage(data.message);
    if (data.token) {
      setToken(data.token);
    }
  };

  const handleProtected = async () => {
    const res = await fetch('http://localhost:5000/api/protected', {
      method: 'GET',
      headers: { 'authorization': token }
    });
    const data = await res.json();
    setProtectedMessage(data.message);
  };

  const handleLogout = () => {
    setToken('');
    setMessage('Logged out successfully!');
    setProtectedMessage('');
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>JWT Auth App</h1>

      {!token ? (
        <>
          <input
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ display: 'block', margin: '10px auto', padding: '8px', width: '200px' }}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ display: 'block', margin: '10px auto', padding: '8px', width: '200px' }}
          />
          <button onClick={handleRegister} style={{ margin: '5px', padding: '8px 20px' }}>Register</button>
          <button onClick={handleLogin} style={{ margin: '5px', padding: '8px 20px' }}>Login</button>
        </>
      ) : (
        <>
          <p>✅ You are logged in!</p>
          <button onClick={handleProtected} style={{ margin: '5px', padding: '8px 20px' }}>Access Protected Page</button>
          <button onClick={handleLogout} style={{ margin: '5px', padding: '8px 20px' }}>Logout</button>
          <p>{protectedMessage}</p>
        </>
      )}

      <p>{message}</p>
    </div>
  );
}

export default App;