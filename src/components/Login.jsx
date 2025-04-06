import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { user } = useAuth(); // Get user from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Redirect to dashboard if already logged in
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setError('');
      navigate('/dashboard'); // Redirect after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Login to SecureVote</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={styles.input} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={styles.input} 
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  loginBox: {
    backgroundColor: '#fff',
    padding: '30px 40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  heading: {
    color: '#6a11cb',
    marginBottom: '20px',
    fontSize: '1.8rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border 0.3s',
  },
  button: {
    padding: '12px',
    backgroundColor: '#6a11cb',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  error: {
    color: '#ff4c4c',
    marginTop: '10px',
    fontSize: '14px',
  },
};

export default Login;
