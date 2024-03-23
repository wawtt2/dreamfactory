import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
    return (
        <div className="overflow-hidden bg-slate-950 w-full">
            <MacbookScroll
                title={
                    <span>
                        Feel the energy of
                        <div className="text-blue-500">
                            Dream Factory
                        </div>
                    </span>
                }
                src={`/output/temp.mp4`}
                showGradient={false}
            />
        </div>
    );
}

