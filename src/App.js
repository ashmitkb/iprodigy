import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Fade-in Effect Wrapper
const FadeInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// Scroll Navigation Component
const Navigation = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">iProdigy</div>
        <ul className="nav-links">
          <li onClick={() => handleScroll('home')}>Home</li>
          <li onClick={() => handleScroll('about')}>About</li>
          <li onClick={() => handleScroll('information')}>Information</li>
          <li onClick={() => handleScroll('contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

// Homepage Component
const Home = () => (
  <FadeInSection>
    <div id="home" className="section home-section">
      <div className="container">
        <div className="hero-content"></div>
      </div>
    </div>
  </FadeInSection>
);

// About Component
const About = () => (
  <FadeInSection>
    <div id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">ABOUT US</h2>
        <div className="content-layout">
          <div className="text-column">
            <h1>PEDIGREE</h1>
            <p>Founded by Indroneil, the creator of iProdigy– country’s all-time most respected consulting organization for Talent, Leadership & Leadership transformation.</p>
            <h1>PEOPLE</h1>
            <p>A group of seasoned and accomplished coaches and consultants, with over 100 years of cumulative experience across industries and expertise spanning Functional, Learning & Organizational Development (L&OD) and Human Resources (HR) domains.</p>
            <h1>PROMISE</h1>
            <p>Contribute to positively impacting your business bottom-line with our offerings.</p>
          </div>
          <div className="image-column">
            <img src="team.png" alt="Our team" />
          </div>
        </div>
      </div>
    </div>
  </FadeInSection>
);

// Information Sections Component
const Information = () => (
  <FadeInSection>
    <div id="information" className="section info-section">
      <div className="container">
        <h2 className="section-title">Key Information</h2>
        {["📊", "🔍", "📈"].map((icon, index) => (
          <motion.div
            key={index}
            className="info-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
          >
            <div className="info-icon">{icon}</div>
            <h3>Section {index + 1}</h3>
            <p>Detailed information about this section.</p>
          </motion.div>
        ))}
      </div>
    </div>
  </FadeInSection>
);

// Main App Component
const App = () => {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <img src='bgp3.png'></img>
        <Home />
        <About />
        <Information />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};


// Contact Form Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-layout">
          <div className="contact-info">
            <p>Have questions or want to learn more? Fill out the form and we'll get back to you as soon as possible.</p>
            <div className="contact-details">
              <p><strong>Email:</strong> info@example.com</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Address:</strong> 123 Information St, Knowledge City</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            {submitted ? (
              <div className="success-message">
                <p>Thank you for your message! We'll be in touch soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">iProdigy</div>
          <div className="footer-social">
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Facebook</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 iProdigy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default App;