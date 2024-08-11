import Section from "./Section";
import { skills } from "../constants";

export default function Skills(){
    const skillCards = skills.map(skill => 
        <div className="p-4" key={skill}>
            <img title={skill.title} src={skill.icon} className="size-20 mx-auto aspect-square" />
        </div>
    );
    const content = <div className="flex flex-row flex-wrap justify-center gap-6">{skillCards}</div>
    return (
        <Section header="Skills" content={content}/>
    );
}