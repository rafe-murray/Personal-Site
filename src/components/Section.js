export default function Section({header, content}){
    return(
        <div id={header} className="pt-16">
            <div className="max-w-7xl items-top mx-auto place-content-center px-4">
                <h2 className="text-6xl font-bold pb-12 text-zinc-900 dark:text-gray-50">{header}</h2>
                {content}
            </div>
        </div>
    );
}