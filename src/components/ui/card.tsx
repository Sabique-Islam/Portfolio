import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt?: string;
  children: React.ReactNode;
}

export function Card({ imageSrc, imageAlt = "", children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "max-h-[95vh] max-w-[95vw] flex flex-row items-center justify-center bg-white dark:bg-black transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="flex-1 h-full flex items-center justify-center bg-white dark:bg-black">
        <div className="relative max-h-[50vh] max-w-[70vh] w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain rounded-4xl"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col justify-center items-center p-10 gap-8">
        {children}
      </div>
    </div>
  );
}