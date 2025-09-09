import React from 'react'


const Boon = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-2xl w-full font-bold">
      <img
        className=" rounded-2xl w-full objent-cover"
        src="/src/assets/bun.jpg"
        alt="Boon"
      />
      <div className=" space-y-2 px-4 mt-4 text-[#303030]">
        <p>
          Id : <span>67096366</span>
        </p>
        <p>
          Name : <span>Pawalit Thammavong</span>
        </p>
        <p>"Just do it and don't look back."</p>
      </div>
    </div>
  );
};

export default Boon
