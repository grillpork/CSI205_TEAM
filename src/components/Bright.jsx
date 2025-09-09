import React from 'react'

const Bright = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-2xl w-full font-bold">
      <img
        className=" rounded-2xl w-full objent-cover"
        src="/src/assets/bright.jpg"
        alt="bright"
      />
      <div className=" space-y-2 px-4 mt-4 text-[#303030]">
        <p>
          Id : <span>67110007</span>
        </p>
        <p>
          Name : <span>Burich Hirunprasertsuk</span>
        </p>
        <p>"If you don't try, you won't know."</p>
      </div>
    </div>
  )
}

export default Bright
