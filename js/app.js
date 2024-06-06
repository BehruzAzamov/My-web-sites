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
