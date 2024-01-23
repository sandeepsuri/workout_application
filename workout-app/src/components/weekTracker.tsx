import React, { useState } from 'react';

const WeekTracker = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    // <div className="flex justify-center items-start min-h-96 p-4">
     

      <div className="w-96 h-20 px-7 mt-4 justify-between items-center inline-flex">
        <div className="px-2 py-5 bg-slate-800 rounded-2xl justify-start items-center flex">
            <div className="text-center text-white text-2xl font-bold font-roboto">WORKOUT101</div>
        </div>
        <div className="flex-col justify-center items-end inline-flex">
            <div className="px-4 py-1 bg-red-700 rounded-tl-2xl rounded-tr-2xl justify-center items-center gap-3.5 inline-flex">
                <div className="text-center text-white text-xl font-normal font-['Impact'] leading-loose">WEEK 16</div>
            </div>
            <div className="self-stretch px-1 bg-red-900 rounded-bl-2xl rounded-br-2xl justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-opacity-50 text-xs font-normal font-['Impact'] leading-loose">OUT OF 28</div>
            </div>
        </div>
      </div>

  );
};

export default WeekTracker;
