import { useEffect } from "react";
import "./App.css";
import Security from "./security.jsx";

function App() {
    useEffect(() => {
       Security();
    }, []);
    
    return (
        <div className="card">
            <div className="avatar-wrap">
                <img
                    src="/favicon.png"
                    alt="Abdul Rahman"
                    className="avatar-image"
                />
            </div>
            <div className="status">
                <span className="status-dot"></span>Open to work
            </div>
            <h1>Abdul Rahman</h1>
            <div className="role">Full-Stack Developer</div>
            <div className="divider"></div>
            <p className="bio">
                Full-stack developer focused on building clean web apps. I enjoy collaborating with other devs and shipping things that solve real problems.
            </p>
            <div className="skills">
                <span className="skill">JAVASCRIPT</span>
                <span className="skill">TYPESCRIPT</span>
                <span className="skill">REACT</span>
                <span className="skill">NODE.JS</span>
                <span className="skill">Express</span>
                <span className="skill">SQL</span>
                <span className="skill">Docker</span>
                <span className="skill">Git</span>
            </div>
            <div className="socials">
                <a
                    href="https://github.com/abdulrdeveloper"
                    className="social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                    href="https://linkedin.com/in/abdulrdeveloper"
                    className="social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                    href="mailto:contact@abdulrdeveloper.me"
                    className="social-btn"
                    title="Email"
                >
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>
            <div className="footer-note">
                Code is the conversation.
            </div>
        </div>
    );
}

export default App;
