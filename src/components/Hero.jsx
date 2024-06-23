import React from "react";
import { Link } from "react-router-dom";
import Card from "./card.jsx";
import { getImageUrl } from "../../imageImporter";

function Hero() {
  return (
    <div className="px-10">
      <div className="w-full  py-4  font-kanit font-semibold text-xl text-white">
        2 Player Games
      </div>
      <div className="mt-2 cards flex justify-between w-full h-full flex-wrap">
        <div className="w-[30%] m-1">
          <Link to="/rock-paper-scissor">
            <Card
              gameimg={getImageUrl("games-thumbnail/rock_paper.jpg")}
              gamename={"Rock Paper Scissor"}
            />
          </Link>
        </div>
        <div className="w-[30%] m-1">
          <Link to="/tic-tac-toe">
            <Card
              gameimg={getImageUrl("games-thumbnail/tic-tac-toe.jpg")}
              gamename={"Tic Tac Toe"}
            />
          </Link>
        </div>
        <div className="w-[30%] m-1">
          <Link to={"/Memorygamefor2player"}>
            <Card
              gameimg={getImageUrl("games-thumbnail/Memory_card.jpg")}
              gamename={"Memory Cards"}
            />
          </Link>
        </div>
        
      </div>
      <div className="w-full  py-4  font-kanit font-semibold text-xl text-white">
        One Player Games
      </div>
      <div className="mt-2 cards flex justify-between w-full h-full flex-wrap">
        <div className="w-[30%] m-1">
          <Link to={"/Memorygame"}>
            <Card
              gameimg={getImageUrl("games-thumbnail/Memory_card.jpg")}
              gamename={"Memory Cards"}
            />
          </Link>
        </div>
        <div className="w-[30%] m-1">
          <Link to={"/Dicegame"}>
            <Card
              gameimg={getImageUrl("games-thumbnail/dicegame.png")}
              gamename={"Dice Game"}
            />
          </Link>
        </div>
        <div className="w-[30%] m-1">
          
            <Card
              gameimg={getImageUrl("games-thumbnail/")}
              gamename={""}
            />
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
