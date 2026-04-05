import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const [protectedMessage, setProtectedMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleRegister = async () => {
    const res = await fetch('my-first-app-memorable-production.up.railway.app/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    setIsError(!res.ok);
    setMessage(data.message);
  };

  const handleLogin = async () => {
    const res = await fetch('my-first-app-memorable-production.up.railway.app/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    setIsError(!res.ok);
    setMessage(data.message);
    if (data.token) {
      setToken(data.token);
    }
  };

  const handleProtected = async () => {
    const res = await fetch('my-first-app-memorable-production.up.railway.app/api/protected', {
      method: 'GET',
      headers: { 'authorization': token }
    });
    const data = await res.json();
    setProtectedMessage(data.message);
  };

  const handleLogout = () => {
    setToken('');
    setMessage('');
    setProtectedMessage('');
    setUsername('');
    setPassword('');
    setIsError(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '40px',
        width: '360px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>

        {!token ? (
          <>
            <h1 style={{ textAlign: 'center', color: '#667eea', marginBottom: '8px' }}>🔐 SecureAuth</h1>
            <p style={{ textAlign: 'center', color: '#888', marginBottom: '30px' }}>Login or create an account</p>

            <label style={{ fontSize: '13px', color: '#555', fontWeight: '600' }}>Username</label>
            <input
              placeholder="Enter username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{
                display: 'block', width: '100%', padding: '10px 12px',
                margin: '6px 0 16px', borderRadius: '8px',
                border: '1px solid #ddd', fontSize: '14px',
                boxSizing: 'border-box', outline: 'none'
              }}
            />

            <label style={{ fontSize: '13px', color: '#555', fontWeight: '600' }}>Password</label>
            <div style={{ position: 'relative', margin: '6px 0 16px' }}>
              <input
                placeholder="Enter password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  display: 'block', width: '100%', padding: '10px 40px 10px 12px',
                  borderRadius: '8px', border: '1px solid #ddd',
                  fontSize: '14px', boxSizing: 'border-box', outline: 'none'
                }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute', right: '12px', top: '50%',
                  transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '18px'
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>

            {message && (
              <p style={{
                textAlign: 'center', padding: '8px', borderRadius: '8px',
                background: isError ? '#ffe0e0' : '#e0ffe0',
                color: isError ? '#cc0000' : '#006600',
                fontSize: '13px', marginBottom: '16px'
              }}>
                {message}
              </p>
            )}

            <button
              onClick={handleLogin}
              style={{
                width: '100%', padding: '12px', background: '#667eea',
                color: 'white', border: 'none', borderRadius: '8px',
                fontSize: '15px', fontWeight: '600', cursor: 'pointer',
                marginBottom: '10px'
              }}
            >
              Login
            </button>

            <button
              onClick={handleRegister}
              style={{
                width: '100%', padding: '12px', background: 'white',
                color: '#667eea', border: '2px solid #667eea', borderRadius: '8px',
                fontSize: '15px', fontWeight: '600', cursor: 'pointer'
              }}
            >
              Register
            </button>
          </>
        ) : (
          <>
            <h1 style={{ textAlign: 'center', color: '#667eea' }}>🎉 Welcome!</h1>
            <p style={{ textAlign: 'center', color: '#888' }}>You are successfully logged in</p>

            {protectedMessage && (
              <p style={{
                textAlign: 'center', padding: '12px', borderRadius: '8px',
                background: '#e0ffe0', color: '#006600', fontSize: '14px',
                margin: '16px 0'
              }}>
                {protectedMessage}
              </p>
            )}

            <button
              onClick={handleProtected}
              style={{
                width: '100%', padding: '12px', background: '#667eea',
                color: 'white', border: 'none', borderRadius: '8px',
                fontSize: '15px', fontWeight: '600', cursor: 'pointer',
                marginBottom: '10px'
              }}
            >
              🔒 Access Protected Page
            </button>

            <button
              onClick={handleLogout}
              style={{
                width: '100%', padding: '12px', background: 'white',
                color: '#cc0000', border: '2px solid #cc0000', borderRadius: '8px',
                fontSize: '15px', fontWeight: '600', cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;