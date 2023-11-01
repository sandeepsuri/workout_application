import React from "react";
import Image from "next/image";

const header = () => {
  return (
    <div>
      <div className="max-w-full h-20 px-28 bg-gray-700 shadow justify-center items-center inline-flex">
        <div className="w-full h-14 relative flex-col justify-start items-start flex">
          <div className="w-52 h-14 relative">
            <div className="w-52 h-14 left-0 top-0 absolute" />
            <div className="flex justify-center">
              <Image
                src="/header_logo.svg"
                alt="header"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
