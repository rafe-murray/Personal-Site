import angular from '../assets/tech/angular.svg';
import bash from '../assets/tech/bash.svg';
import c from '../assets/tech/c.svg';
import cpp from '../assets/tech/cpp.svg';
import css from '../assets/tech/css.svg';
import git from '../assets/tech/git.svg';
import github from '../assets/tech/github.svg';
import gitlab from '../assets/tech/gitlab.svg';
import html from '../assets/tech/html.svg';
import js from '../assets/tech/js.svg';
import matlab from '../assets/tech/matlab.svg';
import php from '../assets/tech/php.svg';
import postgresql from '../assets/tech/postgresql.svg';
import python from '../assets/tech/python.svg';
import react from '../assets/tech/react.svg';
import tailwind from '../assets/tech/tailwind.svg';
import vim from '../assets/tech/vim.svg';
import vscode from '../assets/tech/vscode.svg';
import zsh from '../assets/tech/zsh.svg';

export const skills = [
    {title: "Angular", icon: angular},
    {title: "Bash", icon: bash},
    {title: "C", icon: c},
    {title: "C++", icon: cpp},
    {title: "CSS", icon: css},
    {title: "Git", icon: git},
    {title: "GitHub", icon: github},
    {title: "GitLab", icon: gitlab},
    {title: "HTML", icon: html},
    {title: "JavaScript", icon: js},
    {title: "MatLab", icon: matlab},
    {title: "PHP", icon: php},
    {title: "PostgreSQL", icon: postgresql},
    {title: "Python", icon: python},
    {title: "React", icon: react},
    {title: "Tailwind CSS", icon: tailwind},
    {title: "Vim", icon: vim},
    {title: "VSCode", icon: vscode},
    {title: "ZSH", icon: zsh},
]

export const projects = [
    {header: "Scrapers", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: [python, postgresql]},
    {header: "Candidate Dashboard", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: [angular, js, php, html]},
    {header: "Waitlist Functionality", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: [php]},
    {header: "JMA Website", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills:[css, html]},
    {header: "Patching Script", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: [bash, git, gitlab]},
    {header: "Mechanical Claw", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: [c, cpp]},
    {header: "Tic-Tac-Toe Bot", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: [c]},
    {header: "Memory Game", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: [c, cpp]},
    {header: "Portfolio Website", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi.", skills: [react, js, tailwind, css, html, git, github]},
]

export const work = [
    {employer: "JMA Consulting", jobs: [
        {date: "May 2024 – August 2024", role: "Junior Software Developer", achievements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi."},
        {date: "July 2023 – August 2023", role: "Junior Software Developer", achievements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi."},
    ]},
]