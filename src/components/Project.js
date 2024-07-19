import React from 'react';
import './Styles.css'; // Import custom CSS for Portfolio component styling
import HomeImage from './img/Home.png'; // Import the image
import NewProjectImage from './img/UMI_Project.png'; // Import the new project image

const Project = () => {
  // Dummy data for portfolio items
  const projectItems = [
    {
      title: "React js : portfolio_69rxz",
      description: "This project aims to demonstrate my skills to potential employers during the hiring process.",
      skills: "HTML, CSS, JavaScript",
      image: HomeImage, // Use the imported image
      link: "http://localhost:3000/" // Link to the project
    },
    {
      title: "Codeigniter 3: SMD",
      description: "Proyek ini adalah proyek yang kemungkinan akan dikerjakan untuk PT UNI METALTECH INDONESIA",
      skills: "Codeigniter 3, Node.js",
      image: NewProjectImage, // Use the new imported image
      link: "http://localhost/documis/" // Link to the new project
    }
  ];

  return (
    <div className="kanban-container">
      <h1 className="section-heading">All Running Projects</h1>
      <div className="kanban-board">
        {projectItems.map((item, index) => (
          <div key={index} className="kanban-card">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} className="thumbnail" /> {/* Display the image */}
            <p>Description: {item.description}</p>
            <p>Skills: {item.skills}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="project-button">View Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
