import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Log = () => {
  const [counter, setCounter] = useState(0);
  const [holdingImage, setHoldingImage] = useState(false);
  const [highlightedNumber, setHighlightedNumber] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (holdingImage) {
      timer = setTimeout(() => {
        setCounter((prevCounter) => prevCounter + 1);
        setHighlightedNumber(counter + 1); // Update highlighted number
      }, 3000);
    } else if (timer !== undefined) {
      clearTimeout(timer);
    }

    return () => {
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  }, [holdingImage, counter]); // Include 'counter' in the dependency array

  const handleImageHold = () => {
    setHoldingImage(true);
  };

  const handleImageRelease = () => {
    setHoldingImage(false);
  };

  return (
    <div>
      <div className="flex rounded-full gap-4 py-4">
        {[1, 2, 3, 4, 5].map((number) => (
          <div
            key={number}
            className={`  w-16 h-16 rounded-full shadow inline-flex items-center justify-center text-white text-4xl font-Roboto leading-loose ${
              highlightedNumber === number ? 'bg-cyan-700' : 'bg-neutral-500'
            }`}
          >
            {number}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Image
          src="/Log.svg"
          alt="log"
          width={100}
          height={100}
          onMouseDown={handleImageHold}
          onMouseUp={handleImageRelease}
        />
      </div>
      <div className="text-center text-2xl font-bold mt-4">
        Counter: {counter}
      </div>
    </div>
  );
};

export default Log;
