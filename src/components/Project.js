import React from 'react';
import './Styles.css'; // Import custom CSS for Portfolio component styling
import HomeImage from './img/Home.png'; // Import the image

const Project = () => {
  // Dummy data for portfolio items
  const projectItems = [
    {
      title: "React js : portfolio_69rxz",
      description: "This project aims to demonstrate my skills to potential employers during the hiring process.",
      skills: "HTML, CSS, JavaScript",
      image: HomeImage // Use the imported image
    }
  ];

  return (
    <div className="project-container">
      <h1 className="section-heading">Projects</h1>
      <div className="section-content">
        {projectItems.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} className="thumbnail" /> {/* Display the image */}
            <p>Description: {item.description}</p>
            <p>Skills: {item.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
