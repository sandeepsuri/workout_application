import React, { useState } from 'react'

const weekpot = ({toggleBoard, handleToggle}) => {

  // const [toggleBoard, setToggleBoard] = useState(false)

  // const handleToggle = () => {
  //   setToggleBoard(!toggleBoard)
  // }

  return (
    <div>
      { !toggleBoard ?
        <div className="w-80 h-40 justify-center items-center inline-flex" onClick={handleToggle}>
          <div className="w-80 h-40 bg-slate-800 rounded-2xl border-l-4 border-r-4 border-t-8 border-b-8 border-cyan-900 flex-col justify-center items-center inline-flex">
            <div className="w-72 h-20 text-center text-black text-5xl font-medium font-['Reenie Beanie'] leading-loose">$300</div>
            <div className="px-8 bg-gray-900 justify-center items-center inline-flex">
              <div className="text-center text-white text-opacity-80 text-sm font-light font-['Roboto'] leading-loose tracking-widest">LEADERBOARD</div>
            </div>
          </div>
        </div>
        :
        <div className="w-80 h-[32rem] relative" onClick={handleToggle}>
          <div className="w-80 h-[32rem] px-1 pt-7 pb-96 left-0 top-0 absolute bg-slate-800 rounded-2xl border-l-4 border-r-4 border-t-8 border-b-8 border-cyan-900 flex-col justify-start items-center inline-flex">
              <div className="w-72 h-20 text-center text-black text-5xl font-medium font-['Reenie Beanie'] leading-loose">$300</div>
          </div>

          <div className="w-64 h-72 left-[26px] top-[194px] absolute flex-col justify-center items-start gap-5 inline-flex overflow-auto">
              

            <div className="w-64 flex">
              <div className="w-5 h-7 relative text-center">
                <div className="w-5 h-5 bg-black rounded-full shadow border border-yellow-400">
                  <div className="w-6 left-0 text-center text-yellow-400 text-xs font-medium font-['Inter'] leading-loose mx-auto">1</div>
                </div>
              </div>
              <div className="w-32 mr-20 text-white text-xs font-normal font-['Roboto'] leading-loose">Shanthosh Y</div>
              <div className="w-24 left-[10px] text-white text-xs font-normal font-['Roboto'] leading-loose text-right">$0.00</div>
            </div>
            <div className="w-64 h-px border border-sky-600"></div>

            <div className="w-64 flex">
              <div className="w-5 h-7 relative text-center">
                <div className="w-5 h-5 bg-black rounded-full shadow border border-yellow-400">
                  <div className="w-6 left-0 text-center text-yellow-400 text-xs font-medium font-['Inter'] leading-loose mx-auto">1</div>
                </div>
              </div>
              <div className="w-32 mr-20 text-white text-xs font-normal font-['Roboto'] leading-loose">Shanthosh Y</div>
              <div className="w-24 left-[10px] text-white text-xs font-normal font-['Roboto'] leading-loose text-right">$0.00</div>
            </div>
            <div className="w-64 h-px border border-sky-600"></div>


            <div className="w-64 flex">
              <div className="w-5 h-7 relative text-center">
                <div className="w-5 h-5 bg-black rounded-full shadow border border-yellow-400">
                  <div className="w-6 left-0 text-center text-yellow-400 text-xs font-medium font-['Inter'] leading-loose mx-auto">1</div>
                </div>
              </div>
              <div className="w-32 mr-20 text-white text-xs font-normal font-['Roboto'] leading-loose">Shanthosh Y</div>
              <div className="w-24 left-[10px] text-white text-xs font-normal font-['Roboto'] leading-loose text-right">$0.00</div>
            </div>
            <div className="w-64 h-px border border-sky-600"></div>
          </div>
          
          <div className="w-56 h-7 left-[41px] top-[149px] absolute">
              <div className="left-[172px] top-0 absolute text-center text-white text-xs font-light font-['Roboto'] leading-loose">Contribution</div>
              <div className="left-0 top-0 absolute text-center text-white text-xs font-light font-['Roboto'] leading-loose">Rank</div>
              <div className="left-[58px] top-0 absolute text-center text-white text-xs font-light font-['Roboto'] leading-loose">Name</div>
          </div>
          <div className="w-72 h-10 left-[5px] top-[102px] absolute bg-gray-900 flex-col justify-center items-center gap-10 inline-flex">
              <div className="text-center text-white text-opacity-80 text-sm font-normal font-['Roboto'] leading-loose tracking-widest">LEADERBOARD</div>
          </div>
        </div>
      }

    </div>
  )
}

export default weekpot