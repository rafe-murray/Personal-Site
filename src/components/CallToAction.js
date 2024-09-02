import { Link } from "react-router-dom";

export default function CallToAction({path,label}){
    return (
        <div className="pt-8 block text-center">
            <Link to={path} className="bg-cyan-400 hover:bg-cyan-500 rounded-full py-2 block w-52 justify-items-center text-sm text-zinc-800">{label}</Link>
        </div>
    );
}