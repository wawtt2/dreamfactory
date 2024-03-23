"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampDemo() {
    return (
        <LampContainer>
            <motion.h1
                initial={{opacity: 0.2, y: -50}}
                whileInView={{opacity: 1, y: 100}}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Idea of Dream Factory
                <br/>
                <div className=" text-center justify-center items-center flex">
                    <div className="w-1/6">
                        <div className="tracking-widest" style={{fontSize: '2.5vw'}}>|Automatic|</div>
                        <br/>
                        <div style={{fontSize: '1.6vw'}}>&quot;Your idea, a click
                            away from the full film&quot;
                        </div>
                    </div>
                    <div className="m-24 w-1/6">
                        <div className="tracking-widest" style={{fontSize: '2.5vw'}}>|Powerful|
                        </div>
                        <br/>
                        <div style={{fontSize: '1.6vw'}}>&quot;Top-tier film crew
                            configuration, professional, flawless&quot;
                        </div>
                    </div>
                    <div className=" w-1/6">
                        <div className="tracking-widest" style={{fontSize: '2.5vw'}}>|Practical|
                        </div>
                        <br/>
                        <div style={{fontSize: '1.6vw'}}>&quot;Available anytime,
                            anywhere, averaging 20s per scene.&quot;
                        </div>
                    </div>
                </div>
            </motion.h1>
        </LampContainer>
    );
}
