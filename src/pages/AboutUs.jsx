import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="mb-4">About This Project</h1>
        <p className="lead text-muted">
          Welcome to the <strong>Starberry Machine Test Project</strong>. This application is designed to showcase a professional and scalable approach to web development using modern tools and best practices.
        </p>
      </div>

      <div className="mt-5">
        <h3>Project Features</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Authentication Page with Validations:</strong> A secure and intuitive login page with field-level validations for username and password to ensure data integrity.
          </li>
          <li className="list-group-item">
            <strong>Dynamic List Page:</strong> A responsive page displaying API-fetched data with advanced filtering options like bedrooms, price range, and more.
          </li>
          <li className="list-group-item">
            <strong>Details Page:</strong> A dynamic details page showcasing in-depth information about each list item.
          </li>
          <li className="list-group-item">
            <strong>Reusable Components:</strong> Designed with modular components for consistency and maintainability.
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <h3>Technologies Used</h3>
        <p>This project is built using modern technologies for optimal performance and scalability:</p>
        <ul>
          <li>
            <strong>React 18:</strong> Leveraging the latest features of React for better performance and developer experience.
          </li>
          <li>
            <strong>React Router DOM:</strong> For seamless and efficient navigation between pages.
          </li>
          <li>
            <strong>Bootstrap:</strong> Ensuring responsive and attractive UI design across all devices.
          </li>
          <li>
            <strong>Core CSS:</strong> Custom styles for a polished and modern look.
          </li>
          <li>
            <strong>Axios:</strong> To handle API requests efficiently and ensure smooth data fetching.
          </li>
          <li>
            <strong>React Context API:</strong> Simplifying global state management, especially for authentication.
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <h3>Developer Insights</h3>
        <p>
          This project was developed as part of the Starberry machine test round task to demonstrate proficiency in creating dynamic and responsive web applications. Here's what it includes:
        </p>
        <ul>
          <li>
            A user-friendly authentication page with password and username validations.
          </li>
          <li>
            A list page with advanced filtering capabilities and dynamic data fetching.
          </li>
          <li>
            Modular and reusable components designed for scalability and maintenance.
          </li>
          <li>
            A dynamic details page for displaying additional information.
          </li>
        </ul>
        <p>
          During development, <strong>React 18</strong> features were utilized to improve performance, and some assistance from ChatGPT was taken for resolving CSS-related doubts and ensuring the design meets modern standards.
        </p>
      </div>

      <div className="mt-5">
        <h3>Conclusion</h3>
        <p>
          This project demonstrates a well-rounded approach to building responsive, feature-rich web applications using React and other modern tools. It highlights a developer's ability to manage state, handle routing, and create reusable components while adhering to best practices in web development.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
