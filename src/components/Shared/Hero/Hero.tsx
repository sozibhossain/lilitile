
import { cn } from "@/lib/utils";
import * as React from "react";

interface PageHeaderProps {
    title: string;
    label: string;
}
export function PageHero({ title, label }: PageHeaderProps) {
    return (
        <div className=" top-0 left-0 w-full">
            <div
            className={cn(
                "relative w-full flex flex-col items-center justify-center bg-black h-[109px] md:h-[466px] lg:h-[466px] animate-moveBackground"
            )}
            style={{
                backgroundImage: `url(/Breadcrumb.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
                top: 0,
                left: 0,
            }}
        >
            <div className={cn("relative z-10 flex flex-col items-center gap-4")}>
                <h1 className="text-[25px] lg:text-5xl font-bold tracking-tight text-white text-center">
                    {title}
                </h1>
                <p className="text-[16px] font-normal tracking-tight text-white text-center">{label}</p>
            </div>
        </div>
        </div>
    );
}
