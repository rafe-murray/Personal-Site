import {ReactComponent as Angular} from '../assets/tech/angular.svg';
import {ReactComponent as Bash} from '../assets/tech/bash.svg';
import {ReactComponent as C} from '../assets/tech/c.svg';
import {ReactComponent as Cpp} from '../assets/tech/cpp.svg';
import {ReactComponent as Css} from '../assets/tech/css.svg';
import {ReactComponent as Git} from '../assets/tech/git.svg';
import {ReactComponent as Github} from '../assets/tech/github.svg';
import {ReactComponent as GithubWhite} from '../assets/tech/github-white.svg';
import {ReactComponent as Gitlab} from '../assets/tech/gitlab.svg';
import {ReactComponent as Html} from '../assets/tech/html.svg';
import {ReactComponent as Js} from '../assets/tech/js.svg';
import {ReactComponent as Matlab} from '../assets/tech/matlab.svg';
import {ReactComponent as Mysql} from '../assets/tech/mysql.svg';
import {ReactComponent as Php} from '../assets/tech/php.svg';
import {ReactComponent as Postgresql} from '../assets/tech/postgresql.svg';
import {ReactComponent as Python} from '../assets/tech/python.svg';
import {ReactComponent as React} from '../assets/tech/react.svg';
import {ReactComponent as Tailwind} from '../assets/tech/tailwind.svg';

export const skills = [
    {title: "Python", Icon: Python},
    {title: "MySQL", Icon: Mysql},
    {title: "PostgreSQL", Icon: Postgresql},
    {title: "PHP", Icon: Php},
    {title: "Bash", Icon: Bash},
    {title: "C", Icon: C},
    {title: "C++", Icon: Cpp},
    {title: "Git", Icon: Git},
    {title: "GitHub", Icon: Github, dark: GithubWhite},
    {title: "GitLab", Icon: Gitlab},
    {title: "HTML", Icon: Html},
    {title: "CSS", Icon: Css},
    {title: "Tailwind CSS", Icon: Tailwind},
    {title: "JavaScript", Icon: Js},
    {title: "React", Icon: React},
    {title: "Angular", Icon: Angular},
    {title: "MatLab", Icon: Matlab},   
];

const skillsList = {};
skills.forEach(skill => {
    skillsList[skill.title] = skill
})
export {skillsList}

export const projects = [
    {header: "Scrapers", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: ["Python", "PostgreSQL"]},
    {header: "Candidate Dashboard", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: ["JavaScript", "PHP", "MySQL", "HTML","Angular"]},
    {header: "Waitlist Functionality", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: ["PHP","MySQL"]},
    {header: "JMA Website", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills:["CSS", "HTML"]},
    {header: "Patching Script", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: ["Bash", "Git", "GitLab"]},
    {header: "Mechanical Claw", content: "Wrote an Arduino C++ program to read a sensor indicating when an item was in range of a claw, and then controlled a servo motor to gradually close the claw on the item", skills: ["C", "C++"]},
    {header: "Tic-Tac-Toe Bot", content: "Developed a bot in C to read player inputs and implements strategies to always win or draw a Tic-Tac-Toe game", skills: ["C"]},
    {header: "Memory Game", content: "Created a game in C++ where a player would press buttons in the order that corresponding lights had randomly flashed, with each round increasing speed. Arduino button presses and light activation were simulated with TinkerCAD", skills: ["C", "C++"]},
    {header: "Portfolio Website", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML", "Git", "GitHub"]},
]

export const work = [
    {employer: "JMA Consulting", jobs: [
        {date: "May 2024 – August 2024", role: "Junior Software Developer", achievements: "Reimplemented Django Python scrapers of Canadian elected officials’ information on 75 websites and stored it in a database for later use by a petition service. Created functionality using a low code framework and PHP to manage counselling waitlists and scheduling appointments for the Sexual Assault Centre of Edmonton. Developed displays of candidate information in PHP for an online educational certification system for the Construction Industry Licensing Board of Florida. Custom responsive styling of Bootstrap based theme for new company website. Created an internal company gitlab CI/CD pipeline on code pushes that runs my bash script to reapply patches to site files and if there are conflicts notify an administrator otherwise merge the changes to the repo without triggering the same pipeline. Received Outstanding overall evaluation with strengths in critical thinking, technological agility, and attention to detail."},
        {date: "July 2023 – August 2023", role: "Junior Software Developer", achievements: "Developed a client management application for a software company specializing in building websites and constituent relationship management systems for nonprofits. Implemented custom entities to represent contracts, servers, clients, websites. Created PHP script to import Excel data into MySQL database. Created form in PHP to on-board new clients and create relevant entities"},
    ]},
]

export const courses = [
    {year: "Grade 13", courses: [
        {code:"ABC 5U1", title:"Imaginary course", mark:"97%", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi."},
    ]}
]