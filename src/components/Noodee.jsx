import React from 'react'

const Noodee = () => {
  return (
    <div className=" p-4 rounded-2xl shadow-2xl w-fit space-y-2 font-bold">
      <img
        className=" rounded-2xl w-sm"
        src="/src/assets/muping.jpg"
        alt="muping"
      />
      <div className=" space-y-2 px-4">
        <p>
          Id : <span>67118021</span>
        </p>
        <p>
          Name : <span>Tripop Saibut</span>
        </p>
        <p>"The secret to getting ahead is getting started."</p>
      </div>
    </div>
  )
}

export default Noodee
