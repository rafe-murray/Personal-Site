import Section from "./Section";
import { skills } from "../constants";

export default function Skills(){
    const skillCards = skills.map(skill => 
        <div key={skill}>
            <img title={skill.title} src={skill.icon} className="size-20 mx-auto aspect-square" />
        </div>
    );
    const content = <div className="flex flex-row flex-wrap gap-6 justify-center pb-12">{skillCards}</div>
    return (
        <Section header="Skills" content={content}/>
    );
}