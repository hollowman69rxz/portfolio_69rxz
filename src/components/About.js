import React from 'react';
import './Styles.css'; // Import CSS for styling

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">We are a team of passionate individuals dedicated to bringing you the best content.</p>
                <div className="about-team">
                    <h2>Our Team</h2>
                    <ul>
                        <li>Developer - Alfi Ihsan</li>
                    </ul>
                </div>
            </div>
            <div className="about-image">
                {/* Image goes here */}
            </div>
        </div>
    );
};

export default About;
