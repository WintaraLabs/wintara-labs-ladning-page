"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = () => {
  const firstRow = [
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Cloud Computing",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "AI Integration",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Data Analytics",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Cybersecurity",
    },
  ];
  const secondRow = [
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Enterprise Software",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "IoT Solutions",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Blockchain",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Machine Learning",
    },
  ];

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -200]);

  return (
    <div className="relative h-[30rem] overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex gap-4"
        style={{ y: y1 }}
      >
        {firstRow.map((image, index) => (
          <Image
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        ))}
      </motion.div>
      <motion.div
        className="absolute top-[15rem] left-[10%] w-full h-full flex gap-4"
        style={{ y: y2 }}
      >
        {secondRow.map((image, index) => (
          <Image
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

