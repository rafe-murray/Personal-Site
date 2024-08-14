import Section from './Section';
import { projects } from '../constants';
import { card } from '../styles';

export default function Projects(){
    const content = projects.map(project =>
        <div className={card}>
            <h3 className="text-xl font-semibold pb-2 text-zinc-800 dark:text-gray-50">{project.header}</h3>
            <p className="pb-16 text-gray-600 dark:text-gray-50">{project.content}</p>
            <div className="flex flex-row flex-wrap gap-6">{project.skills.map(skill =>
                <img src={skill} className="size-14 aspect-square"></img>
            )}</div>
        </div>
    );
    return (
        <Section header="Projects" content={content} />
    );
}