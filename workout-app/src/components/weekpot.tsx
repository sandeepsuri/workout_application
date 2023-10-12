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
        <div className="w-80 h-96 relative" onClick={handleToggle}>
          <div className="w-80 h-96 px-1 pt-7 pb-96 left-0 top-0 absolute bg-slate-800 rounded-2xl border-l-4 border-r-4 border-t-8 border-b-8 border-cyan-900 flex-col justify-start items-center inline-flex">
              <div className="w-72 h-20 text-center text-black text-5xl font-medium font-['Reenie Beanie'] leading-loose">$300</div>
          </div>
          <div className="w-64 h-72 left-[26px] top-[194px] absolute flex-col justify-center items-start gap-5 inline-flex">
              <div className="w-64 h-7 relative flex-col justify-start items-start flex">
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">$0.00</div>
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">Shanthosh Y</div>
                  <div className="w-5 h-7 relative">
                      <div className="w-5 h-5 left-0 top-[4px] absolute bg-black rounded-full shadow border border-yellow-400" />
                      <div className="w-6 h-6 p-2.5 left-[-1px] top-[3px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
                          <div className="w-1.5 h-6 text-center text-yellow-400 text-xs font-medium font-['Inter'] leading-loose">1</div>
                      </div>
                  </div>
                  <div className="w-64 h-px border border-sky-600"></div>
              </div>
              <div className="w-64 h-7 relative flex-col justify-start items-start flex">
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">$20.00</div>
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">Gurkirat G</div>
                  <div className="w-5 h-7 relative">
                      <div className="w-5 h-5 left-0 top-[4px] absolute bg-black rounded-full shadow border border-stone-300" />
                      <div className="w-6 h-6 p-2.5 left-[-1px] top-[3px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
                          <div className="w-1.5 h-6 text-center text-stone-300 text-xs font-medium font-['Inter'] leading-loose">2</div>
                      </div>
                  </div>
                  <div className="w-64 h-px border border-sky-600"></div>
              </div>
              <div className="w-64 h-7 relative flex-col justify-start items-start flex">
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">$40.00</div>
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">Harvir S</div>
                  <div className="w-5 h-7 relative">
                      <div className="w-5 h-5 left-0 top-[4px] absolute bg-black rounded-full shadow border border-amber-600" />
                      <div className="w-6 h-6 p-2.5 left-[-1px] top-[3px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
                          <div className="w-1.5 h-6 text-center text-amber-600 text-xs font-medium font-['Inter'] leading-loose">3</div>
                      </div>
                  </div>
                  <div className="w-64 h-px border border-sky-600"></div>
              </div>
              <div className="w-64 h-7 relative flex-col justify-start items-start flex">
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">$60.00</div>
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">Jimi P</div>
                  <div className="w-5 h-7 py-0.5 flex-col justify-center items-center inline-flex">
                      <div className="self-stretch grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                          <div className="w-6 h-6 text-center text-white text-xs font-medium font-['Inter'] leading-loose">4</div>
                      </div>
                  </div>
                  <div className="w-64 h-px border border-sky-600"></div>
              </div>
              <div className="w-64 h-7 relative flex-col justify-start items-start flex">
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">$80.00</div>
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">Sandeep S</div>
                  <div className="w-5 h-7 py-0.5 flex-col justify-center items-center inline-flex">
                      <div className="self-stretch grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                          <div className="w-6 h-6 text-center text-white text-xs font-medium font-['Inter'] leading-loose">5</div>
                      </div>
                  </div>
                  <div className="w-64 h-px border border-sky-600"></div>
              </div>
              <div className="w-64 h-7 relative flex-col justify-start items-start flex">
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">$100.00</div>
                  <div className="w-16 text-white text-xs font-normal font-['Roboto'] leading-loose">Deshane M</div>
                  <div className="w-5 h-7 py-0.5 flex-col justify-center items-center inline-flex">
                      <div className="self-stretch grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                          <div className="w-6 h-6 text-center text-white text-xs font-medium font-['Inter'] leading-loose">6</div>
                      </div>
                  </div>
                  <div className="w-64 h-px border border-sky-600"></div>
              </div>
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