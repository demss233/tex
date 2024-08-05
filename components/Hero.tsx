"use client";
import React from "react";
import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import "../styles/hero.css";

export default function Hero() {
  const significantRef = useRef(null);

  return (
    <>
      <motion.div
        variants={{
          down: {
            transform: "translateY(500px)",
            opacity: "0",
            transition: {
              type: "spring",
              duration: 1,
            },
          },
          up: {
            transform: "translateY(0px)",
            opacity: "1",
            transition: {
              type: "spring",
              duration: 1,
            },
          },
        }}
        initial="down"
        animate="up"
        className="flex flex-col mt-20 w-[90%] mx-auto"
        ref={significantRef}
      >
        <h1 className="text-white mx-auto text-5xl  font-semibold text-center">
          Minimal way to write latex in your browser
        </h1>
        <h1 className="text-white mx-auto text-center text-5xl font-semibold">
          with{" "}
          <span className="font-semibold text-[#c03eae]">gruvbox theme.</span>
        </h1>
        <div className="flex gap-3 mt-10 w-fit mx-auto">
          <a
            href="/latex"
            className="bg-gray-200 text-black outline outline-gray-200 font-semibold hover:bg-transparent transition-all hover:text-white  px-5 py-2 rounded-lg"
          >
            Get Started
          </a>
          <a
            href="https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes"
            className="bg-transparent outline outline-gray-200 hover:bg-gray-200 hover:text-black transition-all text-white  font-semibold  px-6 py-2 rounded-lg"
          >
            Tutorial
          </a>
        </div>
        <div className="mt-10 mx-auto">
          <img
            src="https://mathvault.ca/wp-content/uploads/latex-sample.png"
            alt=""
            className="rounded-lg opacity-60"
          />
        </div>
      </motion.div>
    </>
  );
}
