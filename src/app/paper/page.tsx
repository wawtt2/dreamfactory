import TopBar from "@/app/TopBarDemo";
import {TracingBeamDemo} from "@/app/tracingbeamdemo";
import {SparklesPreview} from "@/app/sparklesdemo";

export default function Paper() {
    return (
        <div className="bg-slate-950">

            <TopBar/>
            <div className="py-32">
                <TracingBeamDemo/>
            </div>
        </div>

    )
}
