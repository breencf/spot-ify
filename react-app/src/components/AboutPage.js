import { FaLinkedin, FaGithub } from "react-icons/fa";
export const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>Spot-ify</h1>
      <br />
      <h2>About the app</h2>
      <h3>
        Spot-ify is a spotify clone built as part of App Academy's 24-week
        online software engineering bootcamp.
      </h3>
      <h4>
        The project uses Python, Flask, PostgreSQL and SQLAlchemy on the
        backend, and React and Javascript on the frontend, with plain CSS.
      </h4>
      <br />
      <h2>Connect with the developers</h2>
      <div className="about-div">
        <h3>Chris Breen</h3>
        <a
          href="http://www.linkedin.com/in/breencf"
          className="a-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="http://www.github.com/breencf"
          className="a-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="about-div">
        <h3>Casey Cochran</h3>
        <a
          href="http://www.linkedin.com/in/casey-cochran-488420219"
          className="a-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="http://www.github.com/casey-cochran"
          className="a-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="about-div">
        <h3>Andrew Cooksey</h3>
        <a
          href="http://www.linkedin.com/in/andrew-cooksey-78569618a"
          className="a-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="http://www.github.com/cooksey99"
          className="a-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="about-div">
        <h3>Wilvanson Dutervil</h3>
        <a
          href="https://www.linkedin.com/in/wilvanson-dutervil-509a2b174/"
          className="a-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="http://www.github.com/wilvanson"
          className="a-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
