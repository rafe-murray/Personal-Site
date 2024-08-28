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
    {header: "Mechanical Claw", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: ["C", "C++"]},
    {header: "Tic-Tac-Toe Bot", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: ["C"]},
    {header: "Memory Game", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: ["C", "C++"]},
    {header: "Portfolio Website", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML", "Git", "GitHub"]},
]

export const work = [
    {employer: "JMA Consulting", jobs: [
        {date: "May 2024 – August 2024", role: "Junior Software Developer", achievements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi."},
        {date: "July 2023 – August 2023", role: "Junior Software Developer", achievements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi."},
    ]},
]