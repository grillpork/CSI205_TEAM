import React from 'react'

const Pooh = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-2xl w-full font-bold">
      <img
        className=" rounded-2xl w-full objent-cover"
        src="/src/assets/Pooh.jpg"
        alt="Pooh"
      />
      <div className=" space-y-2 px-4 mt-4 text-[#303030]">
        <p>
          Id : <span>67090746</span>
        </p>
        <p>
          Name : <span>Tanagorn Thitiputtaprasat</span>
        </p>
        <p>"Life happens, coffee helps"</p>
      </div>
    </div>
  )
}

export default Pooh
