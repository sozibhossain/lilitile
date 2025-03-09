"use client";
// package import 
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// local import 
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";


interface BackToListButtonProps {
  text: string;
  size?: "sm" | "md";
  href: string;
}

export function ButtonArrow({ text, size, href }: BackToListButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      size={size === 'sm' ? 'sm' : 'default'}
      asChild
      className="h-[40px]"
    >
      <Link href={href}>
        <span className="">{text}</span>
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="arrow-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/svg/arrow-narrow-right.svg"
                height={20}
                width={20}
                alt="arrow-Right"
              />
            </motion.div>
          ) : (
            <motion.div
              key="move-up-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/svg/arrow-narrow-up-right.svg"
                height={2}
                width={20}
                alt="arrow-Right"
                className="text-white"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </Button>
  );
}