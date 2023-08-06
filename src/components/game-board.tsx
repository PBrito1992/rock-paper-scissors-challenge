import { useGameStore } from "@/store/game-store";
import { GameBoardHousePick } from "@/components/game-board-house-pick";
import { GameBoardPick } from "@/components/game-board-pick";

const GameBoard = () => {
  const { picked } = useGameStore();

  return <>{!picked ? <GameBoardPick /> : <GameBoardHousePick />}</>;
};

export { GameBoard };
