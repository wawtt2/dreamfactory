"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Collaborative Editing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="h-full w-full bg-[#f0f2f2] flex items-center justify-center text-white">
                Collaborative Editing
            </div>
        ),
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-black flex items-center justify-center text-white">
                Version control
            </div>
        ),
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-black flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="p-10">
            <StickyScroll content={content} />
        </div>
    );
}
