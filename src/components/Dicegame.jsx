import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../imageImporter";

function Dicegame() {
  const dice = Array(6).fill(null);
  const [choosenumb, setchoosenumb] = useState(0);
  const [randomedice, setrandomedice] = useState(0);
  const [alert,setalert]=useState(false);
  const [totalscore, settotalscore] = useState(0);
  const [showrules, setshowrules] = useState(false);
  console.log(showrules);

  useEffect(()=>{
    if(!choosenumb==0){
      setalert(false);
      if(!randomedice==0 && !choosenumb==0){
        if(randomedice==choosenumb){
          settotalscore(totalscore+choosenumb);
          setTimeout(() => {
            setrandomedice(0);
          setchoosenumb(0);
          }, 2000);
          
          
        }
        else{
          settotalscore(totalscore-2);
          setTimeout(() => {
            setrandomedice(0);
          setchoosenumb(0);
          }, 500);
        }
      }
    }
    else{
      
    }
      
    
  },[randomedice,choosenumb]);
  const rolldice = () => {
    if(!choosenumb==0)
      {
        const newDice = Math.floor(Math.random() * 6) + 1;
        setrandomedice(newDice);
      }
    else{
      setalert(true);
    }
    
    
    
  };
  

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className=" w-[60%]   bg-gray-200 text-gray-800 border-4 border-[#45cce9] rounded-2xl  flex  items-center flex-col  ">
        <div className="flex justify-between w-full mt-5">
          <div className="flex flex-col items-center ml-10 font-oxanium font-semibold  ">
            <div className="text-6xl font-kanit ">{totalscore}</div>
            <div>Total Scores</div>
          </div>
          <div className="mr-10 flex flex-col items-end font-oxanium font-bold relative">
           {alert && <div className="absolute text-red-500 -top-4 right-0 text-sm">You have not selected any number</div>} 
            <div>
              {dice.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setchoosenumb( index+1);
                  }}
                  className=" m-1 border-2 border-white py-1 px-3 hover:bg-white  focus:bg-gray-700 focus:text-gray-200"
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className=" mt-4"> Select Number</div>
          </div>
        </div>
        <div className="dice mt-5">
          <button
            onClick={() => {
              rolldice();
            }}
          >
            {randomedice==0 ? (<img
              className=" w-36"
              src={getImageUrl("Dicegame/dice_1.png")}
              alt=""
            />):(<img
              className=" w-36"
              src={getImageUrl(`Dicegame/dice_${randomedice}.png`)}
              alt=""
            />)}
          </button>
        </div>
        <div className=" font-kanit mt-1 ">Click on Dice to roll</div>
        <div className="mt-5">
          <button onClick={()=>{settotalscore(0);
          }} className="btn m-1 text-sm font-kanit border-2 border-black py-1 px-6 rounded-[4px]  hover:bg-white  focus:bg-black focus:text-gray-200 ">
            Reset Scores
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setshowrules(!showrules);
            }}
            className="btn m-1 text-sm font-kanit border-2 border-black py-1 px-7 rounded-[4px]  hover:bg-white  focus:bg-black focus:text-gray-200 "
          >
            {!showrules ? "Show Rules" : "Hide Rules"}
          </button>
        </div>
        {showrules && (
          <div className="bg-[#FBF1F1] p-4 mt-4 mb-2">
            <div className="text-lg font-kanit font-semibold mb-1">
              How to play dice game
            </div>
            <div className="  text-xs font-semibold ">Select any number</div>
            <div className=" text-xs font-semibold ">Click on dice image</div>
            <div className=" text-xs font-semibold ">
              After click on dice if selected number is equal to dice number you
              will get same point as dice
            </div>
            <div className=" text-xs font-semibold ">
              If you get wrong guess then 2 point will be dedcuted
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dicegame;
