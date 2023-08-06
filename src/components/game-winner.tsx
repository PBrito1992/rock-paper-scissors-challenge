import { playAgain, useGameStore } from "@/store/game-store";
import { FC } from "react";

type TGameWinner = {
  className?: string;
};

const GameWinner: FC<TGameWinner> = ({ className = "" }) => {
  const { winner, dispatch } = useGameStore();

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <span className="text-4xl text-white uppercase font-bold tracking-wide">
        You {winner === "player" ? "Win" : winner === "house" ? "Lose" : "Draw"}
      </span>
      <button
        className="w-fit bg-white rounded-md px-8 lg:px-16 py-2 lg:py-3 uppercase text-xs lg:text-sm text-primary-rock-to font-semibold hover:scale-105"
        onClick={() => playAgain(dispatch)}
      >
        Play Again
      </button>
    </div>
  );
};

export { GameWinner };
