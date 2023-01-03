import Image from "next/image";

import backgroundImage from "@/images/background-auth.jpg";

import { useEffect, useState } from "react";
function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
export function AuthLayout({ children }) {
  const [imagesCol, setImagesCol] = useState([]);
  const getCollageData = async () => {
    const res = await fetch("/api/collage").then((r) => r.json());
    setImagesCol([...chunks(res[1].rows, 16)]);
  };
  // useEffect(() => {
  //   if (imagesCol.length == 0) getCollageData();
  // });
  return (
    <>
      <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col justify-center bg-black py-12 px-4 shadow-2xl md:flex-none md:px-28">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">{children}</div>
        </div>
        <div className="absolute inset-0 hidden w-full flex-1 sm:block lg:relative lg:w-0 bg-accent-1">
          <div className="flex overflow-scroll h-screen space-x-2">
            {[...Array(4).keys()].map((index) => (
              <div key={index} className="space-y-2">
                {imagesCol &&
                  imagesCol[index]?.map((img) => {
                    return (
                      <div key={img.row.image.src} className="relative">
                        <img className="rounded-sm w-full" src={img.row.image.src} alt="" />
                        <div className="h-full text-white absolute text-sm inset-0 xl:hover:opacity-100 duration-300 flex justify-center items-center backdrop-blur-xl opacity-0 p-4 w-full">{img.row.prompt}</div>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
