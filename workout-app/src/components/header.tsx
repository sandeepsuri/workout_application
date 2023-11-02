import React from "react";
import Image from "next/image";

const header = () => {
  return (
    <div className='container'>
          <div className="h-20 bg-gray-700 flex justify-center">
            <Image
              src="/header_logo.svg"
              alt="header"
              width={200}
              height={200}
            />
          </div>
    </div>
  );
};

export default header;
