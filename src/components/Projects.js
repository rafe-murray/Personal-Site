import Section from './Section';
import Skill from './Skill';
import { projects } from '../constants';
import { card, h4, p } from '../styles';
import { skillsList } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Projects(){
    const content = projects.map(project =>
        <div className={card}>
            <h4 className={h4}>{project.header}{project.github ? <a href={project.github} target="_blank" title="View GitHub repo" className="pl-6 text-2xl"><FontAwesomeIcon icon="fa-brands fa-github" className="hover:scale-105"/></a>: ""}</h4>
            <p className={p + " pb-16"}>{project.content}</p>
            <div className="flex flex-row flex-wrap gap-6">{project.skills.map(skill =>
                {
                    const skillObj = skillsList[skill]
                    return(
                        <>
                            <Skill title={skillObj.title} Icon={skillObj.Icon} className={(skillObj.dark ? "flex dark:hidden " : "") + "size-14 aspect-square"} />
                            {skillObj.dark ? <Skill title={skillObj.title} Icon={skillObj.dark} className="hidden dark:flex size-14 aspect-square" /> : ""}
                        </>
                    );
                })}
            </div>
        </div>
    );
    return (
        <Section header="Projects" content={content} />
    );
}