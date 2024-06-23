import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../imageImporter";
import { motion } from "framer-motion";

function Memorygamefor2player() {
  // Array with 4 null elements used for generates rows and boxes for game board
  let column = 4;
  const rows = Array(4).fill(null);
  const boxes = Array(4).fill(null);

  const [showpic, setshowpic] = useState(Array(16).fill(false));
  const [flip, setflip] = useState(Array(16).fill(false));
  const [shake, setshake] = useState(Array(16).fill(false));
  const [picOne, setPicOne] = useState("");
  const [picTwo, setPicTwo] = useState("");
  const [firstIndex, setFirstIndex] = useState(null);
  const [secondIndex, setSecondIndex] = useState(null);
  const [clickDisabled, setclickDisabled] = useState(false);
  const [matchedcards, setmatchedcards] = useState(0);
  const [cardOrder, setCardOrder] = useState([]);
  const [turn,setturn]=useState(0);
  const [playerApoints,setplayerApoints]=useState(0);
  const [playerBpoints,setplayerBpoints]=useState(0);


  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  // Initialize the card order and shuffle at the start
  useEffect(() => {
    const initialOrder = Array.from({ length: 16 }, (_, index) => index % 8);
    shuffleArray(initialOrder);
    setCardOrder(initialOrder);
  }, []);

  const handleCardClick = (index, imageIndex) => {
    if (showpic[index]) return;
    if (picOne == "") {
      const pic = getImageUrl(`memory_cards/img${imageIndex}.png`);
      setPicOne(pic);
      setFirstIndex(index);
    } else if (picTwo == "") {
      const pic = getImageUrl(`memory_cards/img${imageIndex}.png`);
      setPicTwo(pic);
      setSecondIndex(index);
    } else {
      const pic = getImageUrl(`memory_cards/img${imageIndex}.png`);
      setPicOne(pic);
      setPicTwo("");
    }

    setflip((prevflip) => {
      const newflip = [...prevflip];
      newflip[index] = true;
      return newflip;
    });
    setTimeout(() => {
      setshowpic((prevshowpic) => {
        const newshowpic = [...prevshowpic];
        newshowpic[index] = true; // Show the clicked box
        return newshowpic;
      });
    }, 200);
  };
  useEffect(() => {
    if (picOne && picTwo) {
      setclickDisabled(true);
      if (picOne === picTwo) {
        console.log("matched");
        setPicOne("");
        setPicTwo("");
        setFirstIndex(null);
        setSecondIndex(null);
        setclickDisabled(false);
        setmatchedcards(matchedcards + 1);
        if(turn%2==0){
            setplayerApoints(playerApoints+1);
        }
        else{
            setplayerBpoints(playerBpoints+1);
        }
      } else {
        setTimeout(() => {
            if(turn%2==0){
                setturn(turn+1);
            }
            else{
                setturn(turn+1);
            }  
        }, 500);
        
        setTimeout(() => {
          setshake((prevshake) => {
            const newshake = [...prevshake];
            newshake[firstIndex] = true;
            newshake[secondIndex] = true;
            return newshake;
          });
        }, 1000);
        setTimeout(() => {
          setflip((prevflip) => {
            const newflip = [...prevflip];
            newflip[firstIndex] = false;
            newflip[secondIndex] = false;
            return newflip;
          });
          setshake((prevshake) => {
            const newshake = [...prevshake];
            newshake[firstIndex] = false;
            newshake[secondIndex] = false;
            return newshake;
          });
          setPicOne("");
          setPicTwo("");
          setFirstIndex(null);
          setSecondIndex(null);
          setclickDisabled(false);
        }, 1200); // Delay for 1 second before hiding the cards again
        setTimeout(() => {
          setshowpic((prevshowpic) => {
            const newshowpic = [...prevshowpic];
            newshowpic[firstIndex] = false;
            newshowpic[secondIndex] = false;
            return newshowpic;
          });
        }, 1400);
      }
    }
  }, [picOne, picTwo, firstIndex, secondIndex]);
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className=" w-[55%] bg-black border-4 border-[#45cce9] rounded-2xl  flex  items-center flex-col  ">
        <div className="title relative w-full text-center mb-2">
          <h1 className=" text-3xl font-kanit font-semibold text-white mt-5 ">
            Memory Cards
          </h1>
          <div className="absolute top-12 left-4">
              <h1 className="font-oxanium font-bold text-2xl text-gray-300">
                Player A :<span className="ml-2 text-green-500">{playerApoints}</span> 
              </h1>
            </div>
            <div className="absolute top-12 right-4">
              <h1 className="font-oxanium font-bold text-2xl text-gray-300">
                Player B :<span className="ml-2 text-green-500">{playerBpoints}</span> 
              </h1>
            </div>
            {turn%2==0 ? (
              <motion.div
                key={turn}
                animate={{ top: 0, opacity: 0 }}
                transition={{ duration: 2 }}
                className="absolute top-40 text-green-500 font-oxanium font-bold text-6xl z-[999] left-[22%]"
              >
                Player A turn
                {/* <audio  src={getImageUrl("point-increase.mp3")} /> */}
              </motion.div>
            ):(<motion.div
                key={turn}
                animate={{ top: 0, opacity: 0 }}
                transition={{ duration: 2 }}
                className="absolute top-40 text-green-500 font-oxanium font-bold text-6xl z-[999] left-[22%]"
              >
                Player B turn
                {/* <audio  src={getImageUrl("point-increase.mp3")} /> */}
              </motion.div>)}
        </div>
        <div className="relative">
          {matchedcards == 8 && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 px-4 py-2 rounded-lg text-xl z-10 font-kanit font-semibold text-center">
              Game over!
            </div>
          )}
          <div
            className={` board mt-5 mb-3 ${
              matchedcards == 8 ? "opacity-50" : ""
            }`}
          >
            {rows.map((_, rowIndex) => (
              <div key={rowIndex} className="row flex">
                {boxes.map((_, boxIndex) => {
                  const index = rowIndex * column + boxIndex;
                  const imageIndex = cardOrder[index];

                  return (
                    <motion.button
                      animate={
                        flip[index] ? { transform: "rotateY(180deg)" } : {}
                      }
                      transition={{ duration: 0.8 }}
                      key={boxIndex}
                      onClick={() => handleCardClick(index, imageIndex)}
                      disabled={clickDisabled}
                      className="relative box m-2 h-20 w-20 bg-[#355d72] rounded-lg flex items-center justify-center  cursor-pointer"
                    >
                      {showpic[index] ? (
                        <motion.img
                          animate={
                            shake[index]
                              ? { x: [0, -13, 13, -5, 5, 0] }
                              : { rotateY: 0 }
                          }
                          transition={{ duration: 0.2 }}
                          className="h-16"
                          src={getImageUrl(`memory_cards/img${imageIndex}.png`)}
                          alt={`Card ${index}`}
                        />
                      ) : (
                        <span className="font-bold text-4xl text-[#64add4]">
                          ?
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="reset-btn mb-5">
          <button
            onClick={() => window.location.reload()}
            className=" btn text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 "
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Memorygamefor2player;

