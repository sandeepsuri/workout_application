import React, { useState } from 'react'
import "@fontsource/reenie-beanie"

interface WeekpotProps {
  toggleBoard: boolean;
  handleToggle: () => void
}

const weekpot = ({toggleBoard, handleToggle}: WeekpotProps) => {

  const nameMapping = {
    1: 'Sandeep S',
    2: 'Harvir S',
    3: 'Jimi P',
    4: 'Deshane M',
    5: 'Shanthosh Y',
    6: 'Gurkirat G'
  }

  return (
    <div>
      { !toggleBoard ? (
        <div className="w-80 h-40 justify-center items-center inline-flex" onClick={handleToggle}>
          <div className="bg-slate-800 rounded-2xl border-l-4 border-r-4 border-t-8 border-b-8 border-cyan-900 flex-col justify-center items-center inline-flex">
            <div className="w-80 h-30 text-center text-white text-5xl font-roboto leading-loose">$300</div>
            <div className="text-center text-white text-opacity-80 text-sm font-light font-roboto leading-loose tracking-widest">LEADERBOARD</div>
          </div>
        </div>
      ) : (
        <div className="w-80 h-108 bg-slate-800 rounded-2xl border-l-4 border-r-4 border-t-8 border-b-8 border-cyan-900 flex flex-col items-center p-6" onClick={handleToggle}>
          <div className="w-full text-center text-white text-6xl font-roboto mb-6">$300</div>

          <div className="w-full text-center text-white text-opacity-80 text-2xl font-extralight font-roboto tracking-widest mb-4">LEADERBOARD</div>

          <div className="w-5/6 mb-5">
            <div className="h-7 text-white text-xs font-light font-roboto flex justify-between">
              <span>Rank</span>
              <span>Name</span>
              <span>Contribution</span>
            </div>
          </div>

          <div className="w-5/6 flex flex-col gap-4 overflow-auto">
            {Object.entries(nameMapping).map(([score, name], index) => {
              return (
                <div key={index} className="flex items-center border-b border-sky-600 justify-between text-white mb-2">
                  <div className="flex items-center space-x-4"> 
                    <div 
                      className={`w-6 h-6 bg-black rounded-full shadow border mb-1
                        ${score === '1' ? `border-yellow-400` : 
                          score === '2' ? `border-stone-300` : 
                            score === '3' ? `border-amber-600` : ''} 
                      flex items-center justify-center`}
                    >
                      <span className={`text-xs font-medium ${
                        score === '1' ? `text-yellow-300` : 
                          score === '2' ? `text-stone-300` : 
                            score === '3' ? `text-amber-600` : ''}`}>{score}</span>
                    </div>
                    <span className="font-medium text-sm mb-1">{name}</span>
                  </div>
                  <span className="text-opacity-70 pr-4 w-1/4 mb-1 text-right">$0.00</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  )
}

export default weekpot

