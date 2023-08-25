import React from 'react'

const log = () => {
return (
<div>
  <div className="flex rounded-full gap-4 py-4">
    {[1, 2, 3, 4, 5].map((number) => (
      <div key={number} className="bg-red-600 rounded-full w-10 h-10 inline-flex items-center justify-center">
        {number}
      </div>
    ))}
  </div>
  <div className="bg-red-900 text-black">Log Workout button</div>
</div>
  )
}


export default log