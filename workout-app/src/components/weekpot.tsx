import React, { useState } from 'react'

const weekpot = ({toggleBoard, handleToggle}) => {

  // const [toggleBoard, setToggleBoard] = useState(false)

  // const handleToggle = () => {
  //   setToggleBoard(!toggleBoard)
  // }

  return (
    <div>
      { !toggleBoard ? (
        <div className="w-80 h-40 justify-center items-center inline-flex" onClick={handleToggle}>
          <div className="w-80 h-40 bg-slate-800 rounded-2xl border-l-4 border-r-4 border-t-8 border-b-8 border-cyan-900 flex-col justify-center items-center inline-flex">
            <div className="w-72 h-20 text-center text-black text-5xl font-medium font-['Reenie Beanie'] leading-loose">$300</div>
            <div className="px-8 bg-gray-900 justify-center items-center inline-flex">
              <div className="text-center text-white text-opacity-80 text-sm font-light font-['Roboto'] leading-loose tracking-widest">LEADERBOARD</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-80 h-96 bg-slate-800 rounded-2xl border-l-4 border-r-4 border-t-8 border-b-8 border-cyan-900 flex flex-col items-center p-6" onClick={handleToggle}>
          <div className="w-full text-center text-black text-6xl font-bold mb-6">$300</div>

          <div className="w-5/6 h-7 text-white text-xs font-light font-['Roboto'] mb-5 flex justify-between">
              <span>Rank</span>
              <span>Name</span>
              <span>Contribution</span>
          </div>

            <div className="w-5/6 flex flex-col gap-4">
                {/* Sample Entry */}
                <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-6">
                        <div className="w-6 h-6 bg-black rounded-full shadow border border-yellow-400 flex items-center justify-center">
                            <span className="text-yellow-400 text-sm font-medium">1</span>
                        </div>
                        <span>Shanthosh Y</span>
                    </div>
                    <span>$0.00</span>
                </div>
                <div className="w-full h-px border border-sky-600 my-2"></div>
                {/* Repeat the above structure for each entry */}
            </div>
        </div>
      )}

    </div>
  )
}

export default weekpot