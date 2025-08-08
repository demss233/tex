"use client";
import React from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useState } from "react";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import { useRef } from "react";

const dummyData = `This is an example usage of this editor. <br>For a newline you could use the newline tag inside the dollar combo.<br><br>

Here is an example of factorisation of $p(x) = x^2 + 5x + 6$ <br>
$p(x) = x^2 + 5x + 6 = 0$ <br>
$x^2 + 3x + 2x + 6 = 0$ <br>
$x(x + 3) + 2(x + 3) = 0$ <br>
$(x + 2)(x + 3) = 0$ <br>
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
        <div className="flex flex-col sm:w-[40%] w-[100%]">
          <button
            className="bg-[#3c3836]  font-semibold py-4 text-[#ebdbb2]"
            onClick={handleCaptureClick}
          >
            Download Screenshot
          </button>
          <textarea
            name="textarea"
            id="textarea"
            className="resize-none w-full p-2 outline-none bg-[#282828] text-[#ebdbb2] h-[100vh] placeholder-[#bfae87]"
            spellCheck="false"
            placeholder="Type some latex.."
            onChange={(e) => {
              setMath(e.target.value);
            }}
          >
            {dummyData}
          </textarea>
        </div>
        <div
          className="preview w-full bg-[#1d2021] sm:w-[60%] text-[#ebdbb2] p-2"
          ref={previewRef}
          spellCheck={false}
        >
          <Latex>{math}</Latex>
        </div>
      </div>
    </>
  );
}
