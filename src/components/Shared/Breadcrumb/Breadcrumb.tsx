import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import * as React from "react";

interface PageHeaderProps {
    items: {
        label: string;
        href: string;
    }[];
}
export function PageBreadcrumb({ items }: PageHeaderProps) {
    return (
        <div
            className={cn(
                "mt-[40px]"
            )}

        >
            <div className={cn(" flex flex-col ")}>
                <Breadcrumb>
                    <BreadcrumbList>
                        {items.map((item, index) => (
                            <React.Fragment key={`fragment-${item.label}-${index}`}>
                                {index > 0 && (
                                    <BreadcrumbSeparator className="text-black">
                                        {">"}
                                    </BreadcrumbSeparator>
                                )}
                                <BreadcrumbItem key={`item-${item.label}-${index}`}>
                                    {index === items.length - 1 ? (
                                        <BreadcrumbPage className="text-base md:text-lg lg:text-xl leading-[24px] font-normal lg:font-medium text-black">
                                            {item.label}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink
                                            className="text-base md:text-lg lg:text-xl leading-[24px] font-normal lg:font-medium text-black"
                                            href={item.href}
                                        >
                                            {item.label}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </React.Fragment>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
    );
}
