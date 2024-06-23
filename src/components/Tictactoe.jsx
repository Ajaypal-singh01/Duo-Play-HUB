import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../imageImporter";
import { motion } from "framer-motion";

function TicTacToe() {
  // Array with 3 null elements used for generates rows and boxes for game board
  const rows = Array(3).fill(null);
  const boxes = Array(3).fill(null);

  //cross and zero icons
  const cross = getImageUrl("TicTacToe/cross.png");
  const zero = getImageUrl("TicTacToe/zero.png");

  //states
  const [count, setcount] = useState(0);
  const [lock, setlock] = useState(false);
  const [winner, setwinner] = useState(null);
  const [data, setData] = useState(Array(9).fill(""));

  //column variable for make mapping elements unique
  const column = 3;

  // wining cases
  const winningCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const toggle = (e, numb) => {
    if (lock || data[numb]) {
      return 0;
    }
    const newData = [...data]; // Create a copy of the data array
    if (count % 2 === 0) {
      newData[numb] = "x";
      e.target.innerHTML = ` <img className="w-16 h-16 " src=${cross} alt="" />`;
      e.target.disabled = true;
      setcount(count + 1);
    } else {
      e.target.innerHTML = ` <img className="w-16 h-16 " src=${zero} alt="" />`;

      newData[numb] = "o";
      e.target.disabled = true;
      setcount(count + 1);
    }
    setData(newData);
  };
  useEffect(() => {
    checkwinner();
  }, data);

  const checkwinner = () => {
    for (let Case of winningCases) {
      let pos1val = data[Case[0]];
      let pos2val = data[Case[1]];
      let pos3val = data[Case[2]];

      if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
        if (pos1val === pos2val && pos2val === pos3val) {
          console.log("winner", pos1val);
            setwinner(pos1val);
          setlock(true);
        }
      }
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className=" w-[60%]   bg-black border-4 border-[#45cce9] rounded-2xl  flex  items-center flex-col  ">
        <div className="title">
          <h1 className=" text-3xl font-kanit font-semibold text-white mt-5 ">
            Tic Tac Toe
          </h1>
        </div>
        <div className=" relative">
          {winner&&<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 px-4 py-2 rounded-lg text-xl z-10 font-kanit font-semibold text-center">{winner=="x"?<img className="w-16 h-16 mb-2 " src={cross} alt="" />:<img className="w-16 h-16 " src={zero} alt="" />}Winner</div>}
          <div className={` board mt-5 ${winner ? "opacity-50":""}`}>
            {rows.map((_, rowIndex) => (
              <div key={rowIndex} className="row flex">
                {boxes.map((_, boxIndex) => (
                  <button
                    key={boxIndex}
                    onClick={(e) => {
                      toggle(e, rowIndex * column + boxIndex);
                    }}
                    className="box m-[3px] h-20 w-20 bg-[#355d72] rounded flex items-center justify-center"
                  ></button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="reset-btn my-5">
          <motion.button
          animate={winner?{scale:1.3}:{}}
          transition={{duration:1}}
            onClick={() => window.location.reload()}
            className=' btn text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 '
          >
            Reset
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
