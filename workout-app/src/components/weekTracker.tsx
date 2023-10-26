import React, { useState } from 'react';

const weekTracker: React.FC = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div className="flex justify-center items-start min-h-96 p-4">
      <button
        className={`w-${buttonClicked ? 'full' : '52'} h-[20px] px-4 py-[16px] rounded-full justify-center items-center inline-flex bg-red-700 text-white`}
        onClick={handleClick}
        style={{ fontFamily: 'Impact' }}
      >
        {buttonClicked ? 'WEEK 16 out of 28' : 'WEEK 16'}
      </button>
    </div>
  );
};

export default weekTracker;