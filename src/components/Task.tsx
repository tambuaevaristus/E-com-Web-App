import React from 'react'



export const Task = () => {


 
  return (
    <div>
        <div className="flex mb-4 items-center border p-3 bg-gray-500">
                <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
            </div>
    </div>
  )
}
