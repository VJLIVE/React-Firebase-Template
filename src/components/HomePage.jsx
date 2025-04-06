import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.heroSection}>
        <h1 style={styles.heading}>Revolutionizing Voting with Faster and Secure Automated Verification</h1>
        <p style={styles.subHeading}>
          Say goodbye to long queues and security risks. Vote effortlessly with our automated, secure verification system.
        </p>
        <Link to="/get-started" style={styles.ctaButton}>Get Started</Link>
      </header>

      {/* Problem Statement */}
      <section style={styles.problemSection}>
        <h2>Why Change Is Needed</h2>
        <p>
          Manual voter verification at polling booths is time-consuming, prone to errors, and vulnerable to security breaches. 
          Voters often face long waits, leading to frustration and reduced participation. 
          It's time to make voting faster, more secure, and reliable.
        </p>
      </section>

      {/* Our Solution */}
      <section style={styles.solutionSection}>
        <h2>Our Solution: Automated Verification</h2>
        <p>
          SecureVote leverages cutting-edge technology to automate voter verification, reducing waiting times,
          enhancing security, and ensuring election integrity. 
          No more manual checks—just fast, secure, and reliable voting.
        </p>
        <img 
          src="https://as1.ftcdn.net/jpg/06/83/88/64/1000_F_683886438_c5OBLwQcA1DFCK4ySRI4hZmLaVWDzvKO.webp" 
          alt="Automated Voting" 
          style={styles.solutionImage} 
        />
      </section>

      {/* How It Works */}
      <section style={styles.howItWorksSection}>
        <h2>How It Works</h2>
        <div style={styles.stepsContainer}>
          <div style={styles.step}>
            <h3>1️⃣ Register</h3>
            <p>Create an account with verified credentials.</p>
          </div>
          <div style={styles.step}>
            <h3>2️⃣ Verify</h3>
            <p>Automated facial recognition or biometric authentication.</p>
          </div>
          <div style={styles.step}>
            <h3>3️⃣ Vote</h3>
            <p>Cast your vote securely and instantly.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={styles.featuresSection}>
        <h2>Why Choose SecureVote?</h2>
        <div style={styles.featuresContainer}>
          <div style={styles.featureCard}>
            <h3>⚡ Fast & Efficient</h3>
            <p>Reduce waiting times with automated verification.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>🔒 Secure & Reliable</h3>
            <p>Advanced encryption and biometric security.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>✅ Transparent & Fair</h3>
            <p>Blockchain-backed processes for transparent elections.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2>Ready to Transform Voting?</h2>
        <Link to="/get-started" style={styles.ctaButton}>Get Started Now</Link>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 SecureVote. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    color: '#333',
  },
  heroSection: {
    backgroundColor: '#28A745',
    color: '#fff',
    textAlign: 'center',
    padding: '60px 20px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '800px',
    marginBottom: '40px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subHeading: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  ctaButton: {
    padding: '12px 20px',
    backgroundColor: '#FFA500',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
  problemSection: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '30px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  solutionSection: {
    backgroundColor: '#f0f0f0',
    padding: '40px 20px',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  solutionImage: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '8px',
    marginTop: '20px',
  },
  howItWorksSection: {
    backgroundColor: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  stepsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
  },
  step: {
    backgroundColor: '#FFA500',
    padding: '20px',
    borderRadius: '8px',
    width: '250px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  featuresSection: {
    backgroundColor: '#f0f0f0',
    padding: '40px 20px',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  featuresContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: '250px',
  },
  ctaSection: {
    backgroundColor: '#28A745',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  footer: {
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '5px',
    width: '100%',
    textAlign: 'center',
  },
};

export default HomePage;
