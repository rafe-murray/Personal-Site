export default function Section({header, content}){
    return(
        <div id={header} className="p-4 pt-16 mt-[-2rem]">
            <div className="max-w-7xl items-top mx-auto place-content-center m-4 px-6">
                <h2 className="text-6xl font-bold pb-12 text-zinc-900">{header}</h2>
                {content}
            </div>
        </div>
    );
}