import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      setFormData({
        fullName: '',
        dob: '',
        phone: '',
        address: '',
        email: '',
        password: '',
      });
      setError('');
      alert("Please wait until your ID is approved.");  // Show an alert after successful signup
      navigate('/'); // Redirect to the homepage after the alert is shown
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.signupBox}>
        <h2 style={styles.heading}>Create Your Account</h2>
        <form onSubmit={handleSignup} style={styles.form}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button
            type="submit"
            style={isLoading ? styles.loadingButton : styles.button}
            disabled={isLoading}
          >
            {isLoading ? 'Signing Up...' : 'Signup'}
          </button>
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
  signupBox: {
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
  loadingButton: {
    padding: '12px',
    backgroundColor: '#aaa',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'not-allowed',
  },
  error: {
    color: '#ff4c4c',
    marginTop: '10px',
    fontSize: '14px',
  },
};

export default Signup;
