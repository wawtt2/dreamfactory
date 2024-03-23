import Image from "next/image";
import {GoogleGeminiEffectDemo} from "@/app/test";
import {HeroParallaxDemo} from "@/app/heroparallaxdemo";
import {NavbarDemo} from "@/app/navbardemo";
import {TypewriterEffectSmoothDemo} from "@/app/typewritterdemo";
import {ParallaxScrollDemo} from "@/app/parallax-scroll-demo";
import TopBar from "@/app/TopBarDemo";
import {LampDemo} from "@/app/lampdemo";
import {StickyScrollRevealDemo} from "@/app/stickyscrolldemo";

import { motion } from "framer-motion";
import Gallery from "@/app/gallery";

export default function Home() {
    return (
        <main className="bg-slate-950">
            <TopBar/>
            <HeroParallaxDemo/>
            <LampDemo/>
            <Gallery/>
            <ParallaxScrollDemo/>
        </main>
);
}
