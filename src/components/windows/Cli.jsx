import React from "react";
import Terminal from "react-console-emulator";
import "./cli.scss";
import MacWindow from "./MacWindow";

const Cli = ({windowName,setWindowsState}) => {
  const commands = {
    about: {
      description: "Learn more about me",
      usage: "about",
      fn: () =>
        `Hi, I'm Chaitanya Pathak 👋
Software Developer passionate about building practical applications.
Currently focused on Backend Development, Data Engineering, and Problem Solving.`,
    },

    skills: {
      description: "View my technical skills",
      usage: "skills",
      fn: () =>
        `⚡ Skills

Languages:
• Python
• JavaScript
• SQL

Frontend:
• React
• HTML
• CSS
• Bootstrap

Backend:
• Node.js
• MySQL

Tools:
• Git
• GitHub
• Prompt Engineering
• AI Tools (ChatGPT, Grok)`,
    },

    experience: {
      description: "View my work experience",
      usage: "experience",
      fn: () =>
        `💼 Experience

OstrichQuiz – AI Content Generation Intern

• Led a team of 5 interns
• Generated 8 months of educational content in 1 month
• Used prompt engineering and AI tools
• Worked with JSON data pipelines`,
    },

    education: {
      description: "View my education",
      usage: "education",
      fn: () =>
        `🎓 Education

Bachelor of Engineering
Information Technology
`,
    },

    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () =>
        `🚀 Projects

1. MacOS Portfolio
2. Physiotherapy Pose Detection System
3. IoT Smart Parking System
4. Student Attendance System (PHP + MySQL)`,
    },

    github: {
      description: "Open my GitHub",
      usage: "github",
      fn: () => {
        window.open(" https://github.com/chaitanya-218", "_blank");
        return "Opening GitHub...";
      },
    },

    linkedin: {
      description: "Open my LinkedIn",
      usage: "linkedin",
      fn: () => {
        window.open("https://www.linkedin.com/in/chaitanya-pathak-51b526229/", "_blank");
        return "Opening LinkedIn...";
      },
    },

    resume: {
      description: "Open my resume",
      usage: "resume",
      fn: () => {
        window.open("/Chaitanya_resume_march2026.pdf", "_blank");
        return "Opening resume...";
      },
    },

    contact: {
      description: "Contact information",
      usage: "contact",
      fn: () =>
        `📬 Contact

Email: chaitanya21pathak8@gmail.com.com
LinkedIn: https://www.linkedin.com/in/chaitanya-pathak-51b526229/
GitHub: https://github.com/chaitanya-218`,
    },
  };

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          promptLabel="chaitanya@pathak:~$ "
          welcomeMessage={`Type 'help' to see available commands.`}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
