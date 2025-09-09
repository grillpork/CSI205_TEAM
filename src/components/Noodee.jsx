import React from 'react'

const Noodee = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-2xl w-full font-bold">
      <img
        className=" rounded-2xl w-full objent-cover"
        src="/src/assets/noodee.jpg"
        alt="noodee"
      />
      <div className=" space-y-2 px-4 mt-4 text-[#303030]">
        <p>
          Id : <span>67118343</span>
        </p>
        <p>
          Name : <span>Patjinun Wongkasiwat</span>
        </p>
        <p>"It’s the little things in life."</p>
      </div>
    </div>
  )
}

export default Noodee
