import { setPicked, useGameStore } from "@/store/game-store";
import { GameItem, GameItemType } from "@/components/game-item";

const GameBoardPick = () => {
  const { dispatch } = useGameStore();

  return (
    <div className="flex flex-col items-center gap-5 lg:gap-20 bg-[url('/images/bg-triangle.svg')] bg-[28px_48px] lg:bg-[48px_64px] bg-no-repeat bg-[length:80%_90%]">
      <div className="flex items-center justify-between gap-16 lg:gap-48">
        <GameItem
          type={GameItemType.Paper}
          onClick={() => setPicked(dispatch, GameItemType.Paper)}
        />
        <GameItem
          type={GameItemType.Scissors}
          onClick={() => setPicked(dispatch, GameItemType.Scissors)}
        />
      </div>
      <GameItem
        type={GameItemType.Rock}
        onClick={() => setPicked(dispatch, GameItemType.Rock)}
      />
    </div>
  );
};

export { GameBoardPick };
