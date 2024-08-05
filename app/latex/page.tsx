"use client";
import React from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useState } from "react";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import { useRef } from "react";

const dummyData = `this is an example usage of this editor. for a newline you could use newline tag.

my question is, are you good at math ? try factoring $x^2 + 5x + 6$. (it also supports html)
`;

export default function Page() {
  const [math, setMath] = useState<string>(dummyData);
  const previewRef = useRef(null);

  const handleCaptureClick = async () => {
    if (previewRef.current === null) return;
    const canvas = await html2canvas(previewRef.current);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "download.png", "image/png");
  };

  return (
    <>
      <div className="sm:flex sm:flex-row flex flex-col ">
        <div className="flex flex-col w-[40%]">
          <button
            className="bg-[#121212]  font-semibold py-2 text-[#689d6a]"
            onClick={handleCaptureClick}
          >
            Download Screenshot
          </button>
          <textarea
            name="textarea"
            id="textarea"
            className="resize-none w-full  p-2 outline-none bg-[#282828] text-[#689d6a] h-[100vh] font-semibold text-2xl placeholder-[#689d6a]"
            placeholder="Type some latex.."
            onChange={(e) => {
              setMath(e.target.value);
            }}
          >
            {dummyData}
          </textarea>
        </div>
        <div
          className="preview w-full text-2xl bg-[#32302f] sm:w-[60%] text-[#689d6a] p-2 font-semibold"
          ref={previewRef}
        >
          <Latex>{math}</Latex>
        </div>
      </div>
    </>
  );
}
