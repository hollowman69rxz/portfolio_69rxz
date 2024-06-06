import React from 'react';
import './Styles.css'; // Import custom CSS for Home component styling

const Home = () => {
  return (
    <div className="intro">
        <div className="intro-text">
          <h1><strong>Hi,</strong> I Am a Frontend Developer</h1>
          <p>
            <strong>"As a Junior Frontend Developer, my responsibility entails transforming design concepts into functional and interactive web pages.<br>
              </br> With my skills and dedication, I am committed to delivering engaging and satisfying user experiences through every project I undertake."</strong>
          </p>
        </div>
        <div className="intro-actions">
          <button className="btn btn-primary">Hire Me</button>
          <button className="btn btn-secondary">Download</button>
        </div>
    </div>
  );
};

export default Home;
