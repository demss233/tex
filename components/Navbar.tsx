"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleHamburger = () => {
    // toggling the bits instead of manually writing some obnoxious stuff.
    setOpen((prevOpen) => !prevOpen);
  };

  const navbarVariants = {
    open: {
      height: "300px",
      transition: {
        type: "spring",
        duration: 0.3,
      },
    },
    close: {
      height: "97px",
      transition: {
        type: "spring",
        duration: 0.3,
      },
    },
  };

  const navbarController = useAnimationControls();

  useEffect(() => {
    if (open) {
      navbarController.start("open");
    } else {
      navbarController.start("close");
    }
  }, [open]);

  return (
    <>
      <div
        className="sm:hidden  hamburger flex flex-col gap-2 absolute right-[30px] top-[28px] cursor-pointer"
        onClick={handleHamburger}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <motion.div
        variants={navbarVariants}
        initial="close"
        animate={navbarController}
        className="flex flex-col sm:flex-row sm:justify-between py-4 sm:py-7 bg-[#222222] sm:bg-transparent sm:gap-0 gap-8 px-10 sm:items-center h-[97px] navbar overflow-hidden"
      >
        <div className="navbar-brand cursor-pointer">
          <Image
            width={60}
            height={60}
            src={"icon.svg"}
            alt="icon"
            className="image_hero"
          ></Image>
        </div>
        <ul className={`flex sm:flex-row flex-col gap-6 text-gray-200 `}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="mailto:shivsatyam86@gmail.com">Feedback</a>
          </li>
          <li>
            <a href="https://github.com/demss233/tex">Github</a>
          </li>
          <li>
            <a
              href="/latex"
              className="bg-gray-200 text-black font-semibold  p-2 rounded-lg"
            >
              Get Started
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
