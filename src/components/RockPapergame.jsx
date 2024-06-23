import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../imageImporter";
import { motion } from "framer-motion";

function RockPapergame() {
  const [userA_choice, setuserA_choice] = useState("");
  const [userB_choice, setuserB_choice] = useState("");
  const [userApoints, setuserApoints] = useState(0);
  const [userBpoints, setuserBpoints] = useState(0);
  const [userAclicked, setuserAclicked] = useState(false);
  const [userBclicked, setuserBclicked] = useState(false);
  const [shake, setshake] = useState(false);
  const [draw, setdraw] = useState(0);
  const [gameover, setgameover] = useState(false);

  const choice = ["rock", "paper", "scissor"];

  useEffect(() => {
    const combochoice = userA_choice + userB_choice;
    setshake(true);

    if (userApoints <= 2 && userBpoints <= 2 && userAclicked && userBclicked) {
      setTimeout(() => {
        if (
          combochoice === "paperrock" ||
          combochoice === "rockscissor" ||
          combochoice === "scissorpaper"
        ) {
          setuserApoints(userApoints + 1);

          if (userApoints === 2) {
            setshake(false);
            setgameover(true);
            setresult("user A Win");
          }
        }
        if (
          combochoice === "rockpaper" ||
          combochoice === "scissorrock" ||
          combochoice === "paperscissor"
        ) {
          setuserBpoints(userBpoints + 1);

          if (userBpoints === 2) {
            setshake(false);
            setgameover(true);

            setresult("user B Win");
          }
        }
        if (
          combochoice === "rockrock" ||
          combochoice === "scissorscissor" ||
          combochoice === "paperpaper"
        ) {
          setdraw(draw+1);
        }

        setshake(false);
      }, 1500);
      setTimeout(() => {
        setuserA_choice("");
        setuserB_choice("");
        setuserAclicked(false);
        setuserBclicked(false);
      }, 3500);
    } 
    if(gameover)
      {
        setshake(false);
      }
  }, [userA_choice, userB_choice]);

  // this hook is for handle keyword input
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!userAclicked || !userBclicked) {
        switch (event.key) {
          case "j":
            setuserB_choice("rock");
            setuserBclicked(true);

            break;
          case "k":
            setuserB_choice("paper");
            setuserBclicked(true);
            break;
          case "l":
            setuserB_choice("scissor");
            setuserBclicked(true);
            break;
          case "a":
            setuserA_choice("rock");
            setuserAclicked(true);
            break;
          case "s":
            setuserA_choice("paper");
            setuserAclicked(true);
            break;
          case "d":
            setuserA_choice("scissor");
            setuserAclicked(true);
            break;

          default:
            break;
        }
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [userAclicked, userBclicked]);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black z-[999]">
      <div className="  bg-[#EDEADE] border-4 border-[#45cce9] rounded-2xl text-center w-[70%] overflow-hidden  ">
        <div>
          <h1 className=" text-4xl font-kanit font-semibold text-[#45cce9]">
            Rock Paper Scissor
          </h1>
        </div>

        <div className="choices flex justify-between ">
          <div className="userAchoice relative">
            <div className="absolute top-0 left-2">
              <h1 className="font-oxanium font-bold text-3xl ml-8 text-gray-500">
                Player A :<span className="ml-2 text-green-500">{userApoints}</span> 
              </h1>
            </div>
            {!userApoints == 0 && (
              <motion.div
                key={userApoints}
                animate={{ top: 0, opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-14 text-green-500 text-8xl z-[999] left-20"
              >
                +1
                {/* <audio  src={getImageUrl("point-increase.mp3")} /> */}
              </motion.div>
            )}
            <div className=" rotate-y-180 w-full mt-5 -ml-5">
              {userA_choice === "" ? (
                <img
                  src={getImageUrl("rock-paper-scissor/rock.png")}
                  alt="Rock"
                />
              ) : shake ? (
                <motion.img
                  animate={{ rotate: [-15, 10, -15] }}
                  transition={{ duration: 0.17, repeat: Infinity }}
                  style={{ transformOrigin: "right center" }}
                  src={getImageUrl("rock-paper-scissor/rock.png")}
                  alt="Rock"
                />
              ) :!gameover?  (
                <img
                  src={getImageUrl(`rock-paper-scissor/${userA_choice}.png`)}
                  alt={userA_choice}
                />
              ) :(<img
                src={getImageUrl("rock-paper-scissor/rock.png")}
                alt="Rock"
              />)}
            </div>
            <div className="flex justify-evenly m-2">
              {choice.map((choice, index) => (
                <div key={index} className="choose ">
                  <img
                    className="-rotate-90  h-14 "
                    src={getImageUrl(`rock-paper-scissor/${choice}_logo.png`)}
                    alt=""
                  />
                  <span className="font-kanit font-semibold">PRESS</span>
                  <span className="ml-1 font-bold text-[#45cce9] text-2xl">
                    {index === 0 ? "A" : index === 1 ? "S" : "D"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {gameover && (
            <motion.div
              animate={{ scale: [0.9, 1, 0.9] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="self-center absolute inset-0    text-red-500 text-4xl font-bold"
            >
              Game over!
            </motion.div>
          )}
          {draw>0&&(<motion.div key={draw} animate={{marginTop:-50,opacity:0}} transition={{duration:2}} className=" self-center absolute inset-0  text-6xl font-bold text-green-500 z-[999]">Draw</motion.div>)}
          <div className="userBchoice relative">
            <div className="absolute top-0 right-2">
              <h1 className="font-oxanium font-bold text-3xl mr-8 text-gray-500">
                Player B : <span className="ml-2 text-green-500">{userBpoints}</span>
              </h1>{" "}
            </div>
            {!userBpoints == 0 && (
              <motion.div
                key={userBpoints}
                animate={{ top: 0, opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-14 text-green-500 text-8xl z-[999] right-20"
              >
                +1
              </motion.div>
            )}
            <div className="w-full mt-5 ml-5 ">
              {userB_choice == "" ? (
                <img src={getImageUrl("rock-paper-scissor/rock.png")} alt="" />
              ) : shake ? (
                <motion.img
                  animate={{ rotate: [-15, 10, -15] }}
                  transition={{ duration: 0.17, repeat: Infinity }}
                  style={{ transformOrigin: "right center" }}
                  src={getImageUrl("rock-paper-scissor/rock.png")}
                  alt=""
                />
              ) : !gameover ? (
                <img
                  src={getImageUrl(`rock-paper-scissor/${userB_choice}.png`)}
                  alt=""
                />
              ) : (
                <img src={getImageUrl("rock-paper-scissor/rock.png")} alt="" />
              )}
            </div>
            <div className="flex justify-evenly m-2">
              {choice.map((choice, index) => (
                <div key={index} className="choose ">
                  {" "}
                  <img
                    className="-rotate-90  h-14 "
                    src={getImageUrl(`rock-paper-scissor/${choice}_logo.png`)}
                    alt=""
                  />{" "}
                  <span className="font-kanit font-semibold">PRESS</span>
                  <span className="ml-1 font-bold text-[#45cce9] text-2xl">
                    {index === 0 ? "J" : index === 1 ? "K" : "L"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="result">Result: {result}</div> */}
        </div>
        <div className=" ">
          {gameover && (
            <button
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              type="button"
              onClick={() => {
                setuserAclicked(false);
                setuserBclicked(false);
                setgameover(false);
                setuserA_choice("");
                setuserB_choice("");
                setuserApoints(0);
                setuserBpoints(0);
                setdraw(0);
              }}
            >
              Restart ?
            </button>
          )}
        </div>
      </div>
      `
    </div>
  );
}

export default RockPapergame;
