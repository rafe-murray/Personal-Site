import Section from "./Section";
import { work } from "../constants";
import { card } from "../styles";

export default function Work(){
    const content=work.map(work =>
        <div className={card}>
            <h3 className="text-3xl font-semibold text-zinc-800 dark:text-gray-50 pb-8">{work.employer}</h3>
            {work.jobs.map(job =>
                <div className="pb-10">
                    <div className="flex flex-col sm:flex-row justify-between text-xl font-semibold text-zinc-800 dark:text-gray-50">
                        <h4 className="pb-2">{job.role}</h4>
                        <h4 className="pb-2">{job.date}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-50">{job.achievements}</p>
                </div>
            )}   
        </div>    
    );
    
    return(
        <Section header="Work Experience" content={content} />
    );
}