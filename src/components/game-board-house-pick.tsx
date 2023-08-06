import { setHousePicked, useGameStore } from "@/store/game-store";
import { GameItemType } from "@/components/game-item";
import { useEffect, useState } from "react";
import { GameItemPicked } from "@/components/game-item-picked";
import { GameWinner } from "@/components/game-winner";

const housePickedOptions = [
  GameItemType.Rock,
  GameItemType.Paper,
  GameItemType.Scissors,
];

const GameBoardHousePick = () => {
  const [randomHousePicked, setRandomHousePicked] =
    useState<GameItemType | null>(null);
  const { picked, dispatch, winner } = useGameStore();

  useEffect(() => {
    const random = Math.floor(Math.random() * housePickedOptions.length);
    const option = housePickedOptions[random];

    const timeoutRef1 = setTimeout(() => setRandomHousePicked(option), 500);
    const timeoutRef2 = setTimeout(() => setHousePicked(dispatch, option), 500);

    return () => {
      clearTimeout(timeoutRef1);
      clearTimeout(timeoutRef2);
    };
  }, [dispatch]);

  return (
    <div className="h-full flex flex-col justify-between lg:justify-center pt-10 pb-16 lg:py-0">
      <div className="flex items-center gap-10 lg:gap-20">
        <GameItemPicked
          title="You Picked"
          value={picked}
          isWinner={winner === "player"}
        />
        {winner && <GameWinner className="hidden lg:flex" />}
        <GameItemPicked
          title="The house Picked"
          value={randomHousePicked}
          isWinner={winner === "house"}
        />
      </div>
      {winner && <GameWinner className="lg:hidden" />}
    </div>
  );
};

export { GameBoardHousePick };
