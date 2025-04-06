import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

const Navbar = () => {
  const { user } = useAuth(); // Get the current user from AuthContext

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign the user out using Firebase Authentication
    } catch (error) {
      console.error('Error signing out: ', error.message);
    }
  };

  return (
    <nav style={styles.navbar}>
      {/* App Name on the Left */}
      <Link to="/" style={styles.brand}>SecureVote</Link>

      {/* Navigation Links on the Right */}
      <div style={styles.rightContainer}>
      <Link to="/" style={styles.link}>Home</Link>
        {user && <Link to="/dashboard" style={styles.link}>Dashboard</Link>}
        {!user ? (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.link}>Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '15px 30px',
    background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '1000',
    boxSizing: 'border-box',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  brand: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: '700',
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px', // Space between the links
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background 0.3s, color 0.3s',
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#ff4c4c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
};

// Hover Effects
styles.link[':hover'] = { backgroundColor: '#fff', color: '#6a11cb' };
styles.logoutButton[':hover'] = { backgroundColor: '#ff1a1a', transform: 'scale(1.05)' };

export default Navbar;
