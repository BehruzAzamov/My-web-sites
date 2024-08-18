const projects = [
  {
    title: "Password Generator",
    githubLink: "https://github.com/BehruzAzamov/Password",
    vercelLink: "https://dazzling-alpaca-13dbc2.netlify.app/",
  },
  {
    title: "Todos",
    githubLink: "https://github.com/BehruzAzamov/Todos",
    vercelLink: "https://todos-six-amber.vercel.app/",
  },
  {
    title: "Todo in React",
    githubLink: "https://github.com/BehruzAzamov/Todos-react",
    vercelLink: "https://todos-react-drab.vercel.app/",
  },
  {
    title:"Quizzes App",
    githubLink:"https://github.com/BehruzAzamov/Quizzes",
    vercelLink:"https://quizzes-seven.vercel.app/",
  },
  {
    title:"Devjobs App",
    githubLink:"https://github.com/BehruzAzamov/Devjobs",
    vercelLink:"https://devjobs-woad.vercel.app/",
  },
  {
    title:"Prepaer to exam",
    githubLink:"https://github.com/BehruzAzamov/Prepare-to-exam",
    vercelLink:"https://prepare-to-exam.vercel.app/login",
  },
  {
    title:"Exam7 1",
    githubLink:"https://github.com/BehruzAzamov/Exam7-1",
    vercelLink:"https://exam7-1.vercel.app/",
  },
  {
    title:"Exam7 2",
    githubLink:"https://github.com/BehruzAzamov/Exam7-2",
    vercelLink:"https://exam7-2.vercel.app/",
  },
  {
    title:"Quiz App",
    githubLink:"https://github.com/BehruzAzamov/Frontend-quizzes-app",
    vercelLink:"https://frontend-quizzes-app.vercel.app/"
  },
  {
    title:"Tip Calc",
    githubLink:"https://github.com/BehruzAzamov/Tip-calculatoor",
    vercelLink:"https://tip-calculatoor-aeiz3kdsd-behruzazamovs-projects.vercel.app/"
  },
  {
    title:"Multi step form",
    githubLink:"https://github.com/BehruzAzamov/JS",
    vercelLink:"https://js-ten-omega.vercel.app/"
  },
  {
    title:"Store in JS",
    githubLink:"https://github.com/BehruzAzamov/Sore-js",
    vercelLink:"https:/js-store-ab.vercel.app/"
  }
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
