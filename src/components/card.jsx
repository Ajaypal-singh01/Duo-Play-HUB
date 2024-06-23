import React from "react";


function card(props) {
  const {gameimg,gamename}=props;
  return (
    <div className="card font-kanit   object-cover w-96  h-72 rounded-xl relative group ">
      <img
        className=" inset-0 object-cover group-hover:opacity-80  shadow-lg hover:shadow-md  hover:shadow-[#67a1b2]   h-[85%] w-full rounded-xl  "
        src={gameimg}
        alt="game_thumbnail"       />
      <div
        className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 absolute bottom-14 w-full  text-center text-4xl font-semibold text-[#0b6582]  "
      >
        <p className="text-white drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-zinc-900">{gamename}</p>
      </div>
      <div className="m-2">
        <button className="btn w-20 h-8 rounded-xl bg-[#45cce9] text-black hover:scale-105  hover:bg-[#87d8e9] group duration-500">
          Play<span className=" group-hover:ml-2 duration-300">&#8594;</span> 
        </button>
      </div>
    </div>
  );
}

export default card;
