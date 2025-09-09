import React from 'react'

const Noodee = () => {
  return (
    <div className=" p-4 rounded-2xl shadow-2xl w-fit space-y-2 font-bold">
      <img
        className=" rounded-2xl w-sm"
        src="/src/assets/noodee.jpg"
        alt="noodee"
      />
      <div className=" space-y-2 px-4">
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
