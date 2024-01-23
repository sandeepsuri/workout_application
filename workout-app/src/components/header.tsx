import React from "react";
import Image from "next/image";

const header = () => {
  return (
    <div className='w-full'>
      <div className="h-20 bg-[#004563] flex justify-center">
        <Image
          src="/logo_white.svg"
          alt="header"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default header;
