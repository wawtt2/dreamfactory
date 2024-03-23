import {HeroParallaxDemo} from "@/app/heroparallaxdemo";
import {ParallaxScrollDemo} from "@/app/parallax-scroll-demo";
import TopBar from "@/app/TopBarDemo";
import {LampDemo} from "@/app/lampdemo";
import Gallery from "@/app/gallery";
import {SparklesPreview} from "@/app/sparklesdemo";
import {MacbookScrollDemo} from "@/app/macbookdemo";

export default function Home() {
    return (
        <main className="bg-slate-950">
            <TopBar/>
            <HeroParallaxDemo/>
            <LampDemo/>
            <MacbookScrollDemo/>
            <SparklesPreview/>
            <ParallaxScrollDemo/>
        </main>
);
}
