import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav id="navbar">
          <ul>
            <li>
              <a href="#welcome-section">Welcome</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a
                id="profile-link"
                href="https://github.com/aster255"
                target="_blank"
              >
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="welcome-section">
        <h1>Welcome to My Portfolio</h1>
        <div className="resume">
          <h2>PAUL ADRIAN A. ALCOS</h2>
          <p className="info">Full Stack Developer</p>

          <p className="info">Email: paaalcos@gmail.com</p>
          <p className="info">
            Portfolio:{" "}
            <a href="https://aster255.github.io/portfolio/" target="_blank">
              https://aster255.github.io/portfolio/
            </a>
          </p>
          <p className="info">
            Github:{" "}
            <a href="https://github.com/aster255" target="_blank">
              https://github.com/aster255
            </a>
          </p>
          <p className="info">Location: Quezon City, Philippines</p>
        </div>
        <div className="summary">
          <h3 className="summary-heading">SUMMARY</h3>
          <p className="summary-text">
            Enthusiastic junior web developer with a passion for innovative and
            challenging projects. Skilled in JavaScript, with hands-on
            experience on Firebase and API integration. Recognized for FoodGPT
            and awarded Best Mini Project 2 for Kutsubako. Collaborative team
            player with a track record of successful project deployments.
          </p>
        </div>
      </section>
      <section id="projects">
        <div className="project-tile">
          <a href="https://aster255.github.io/foodgpt/" target="_blank">
            <img
              src="https://res.cloudinary.com/dqgsn9024/image/upload/v1692092567/portfolio/1_dbq3nb.jpg"
              alt="FoodGPT Project"
            />
            <h2>FoodGPT</h2>
          </a>
          <p>
            Developed a dynamic recipe website using React, Firebase, Bootstrap,
            HTML, JS, and CSS. Implemented advanced LLM (Large Language Model)
            techniques and prompt engineering to generate delightful recipe
            suggestions and stunning images. Pioneered the integration of AI in
            a project, earning recognition as the first student to incorporate
            AI in a bootcamp project.
          </p>
        </div>

        <div className="project-tile">
          <a href="https://aster255.github.io/kutsubako/" target="_blank">
            <img
              src="https://res.cloudinary.com/dqgsn9024/image/upload/v1692092567/portfolio/2_eckt0h.jpg"
              alt="Kutsubako Project"
            />
            <h2>Kutsubako</h2>
          </a>
          <p>
            Conceptualized and executed an impressive ecommerce website inspired
            by Japanese Minimalism Design (Kutsubako means "shoe box" in
            Japanese). Utilized React, Firebase, Bootstrap, HTML, JS, and CSS to
            create a visually appealing and user-friendly shopping experience.
            Employed web scraping techniques to gather product data from
            external sources, ensuring an up-to-date and comprehensive product
            catalog. Received the Best Mini Project 2 award for exceptional
            design and functionality.
          </p>
        </div>

        <div className="project-tile">
          <a href="https://kenmoldez.github.io/Capstone/" target="_blank">
            <img
              src="https://res.cloudinary.com/dqgsn9024/image/upload/v1692092567/portfolio/3_orqacn.jpg"
              alt="Lakbay Tikang Project"
            />
            <h2>Lakbay Tikang- A Travel Website</h2>
          </a>
          <p>
            Refactored the original HTML website concept into a scalable and
            efficient JSX structure, enhancing website performance and
            maintainability. Demonstrated adaptability by developing dynamic
            component routing and mapping from both JSON and Firebase data
            sources, enabling seamless content updates.
          </p>
        </div>

        <div className="project-tile">
          <a href="https://praisenera.github.io/cct_restore/" target="_blank">
            <img
              src="https://res.cloudinary.com/dqgsn9024/image/upload/v1692092567/portfolio/4_z2iyiu.jpg"
              alt="Christian College of Tanauan Project"
            />
            <h2>Christian College of Tanauan</h2>
          </a>
          <p>
            Developed a comprehensive Student Enrollment and Admin Portal for
            the school leveraging React and Firebase technologies. Implemented
            secure user authentication and authorization, ensuring that only
            authorized personnel could access sensitive data and perform
            administrative tasks. Led the backend development efforts,
            efficiently handling form submissions, data validation, and database
            interactions.
          </p>
        </div>

        <div className="project-tile">
          <a
            href="https://aster255.github.io/ECHO.ph/index.html"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dqgsn9024/image/upload/v1692092567/portfolio/5_tyngn4.jpg"
              alt="Echo.ph Project"
            />
            <h2>Echo.ph</h2>
          </a>
          <p>
            Took inspiration from the esports organization Echo Philippines,
            curating content and merchandise in an eye-catching manner using
            Bootstrap components. Demonstrated creativity and attention to
            detail, resulting in a polished concept website for the esports
            organization.
          </p>
        </div>
        <footer>
          <p>
            &copy; 2023 Paul Adrian A. Alcos. All rights reserved. |{" "}
            <a href="https://github.com/aster255" target="_blank">
              GitHub
            </a>
          </p>
        </footer>
      </section>
    </div>
  );
}

export default App;
