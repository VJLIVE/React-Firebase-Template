import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaRegChartBar, FaVoteYea, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Icons for navigation

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div style={styles.container}>
      {/* Sidebar Navigation */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h2 style={styles.logo}>SecureVote</h2>
        </div>
        <nav style={styles.nav}>
          <Link to="/home" style={styles.navItem}>🏠 Home</Link>
          <Link to="/vote" style={styles.navItem}>🗳️ Vote</Link>
          <Link to="/results" style={styles.navItem}>📊 Results</Link>
          <Link to="/settings" style={styles.navItem}>⚙️ Settings</Link>
          <Link to="/logout" style={styles.navItem}>🚪 Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Welcome Section */}
        <section style={styles.welcomeSection}>
          <h1 style={styles.heading}>Welcome, {user ? user.name : "User"}!</h1>
          <p style={styles.subHeading}>Manage your votes and stay updated on upcoming elections.</p>
        </section>

        {/* Upcoming Elections Section */}
        <section style={styles.upcomingSection}>
          <h2>Upcoming Elections</h2>
          <div style={styles.upcomingContainer}>
            <div style={styles.upcomingCard}>
              <h3>2025 Presidential Election</h3>
              <p>Election Date: 15th Nov 2025</p>
              <button style={styles.voteButton}>Vote Now</button>
            </div>
            <div style={styles.upcomingCard}>
              <h3>2025 Local Government Election</h3>
              <p>Election Date: 20th Nov 2025</p>
              <button style={styles.voteButton}>Vote Now</button>
            </div>
          </div>
        </section>

        {/* Voting Status Section */}
        <section style={styles.statusSection}>
          <h2>Your Voting Status</h2>
          <div style={styles.statusCard}>
            <h3>Voting in the 2025 Presidential Election</h3>
            <p style={styles.statusText}>Status: {user?.hasVoted ? "Voted" : "Not Voted"}</p>
            {!user?.hasVoted && (
              <button style={styles.voteButton}>Cast Your Vote</button>
            )}
          </div>
        </section>

        {/* Statistics Section */}
        <section style={styles.statsSection}>
          <h2>Voting Analytics</h2>
          <div style={styles.statsContainer}>
            <div style={styles.statCard}>
              <h3>Voter Turnout</h3>
              <p>75%</p>
            </div>
            <div style={styles.statCard}>
              <h3>Election Results</h3>
              <p>50% in Favor</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Styles for Dashboard
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#FFA500',
    padding: '20px',
    color: '#fff',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  sidebarHeader: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  navItem: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  navItemHovered: {
    color: '#28A745',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f0f0f0',
    overflowY: 'auto',
  },
  welcomeSection: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '30px',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  subHeading: {
    fontSize: '1.2rem',
    color: '#555',
  },
  upcomingSection: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  upcomingContainer: {
    display: 'flex',
    gap: '20px',
  },
  upcomingCard: {
    backgroundColor: '#28A745',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: 'calc(50% - 10px)',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  voteButton: {
    backgroundColor: '#FFA500',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  voteButtonHovered: {
    backgroundColor: '#28A745',
  },
  statusSection: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  statusCard: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
  },
  statusText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  statsSection: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
  },
  statsContainer: {
    display: 'flex',
    gap: '20px',
  },
  statCard: {
    backgroundColor: '#28A745',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: 'calc(50% - 10px)',
    textAlign: 'center',
  },
};

export default Dashboard;
