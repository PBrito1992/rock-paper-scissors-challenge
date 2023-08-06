import { useGameStore } from "@/store/game-store";
import Logo from "/images/logo.svg";

const GameHeader = () => {
  const { totalScore } = useGameStore();

  return (
    <header className="flex justify-between w-full max-w-[750px] mx-auto p-4 border border-neutral-header rounded-lg font-sans">
      <img src={Logo} className="h-16 lg:h-24" />
      <div className="flex flex-col justify-center items-center bg-white rounded-lg w-20 lg:w-24 p-2">
        <span className="text-neutral-score uppercase font-bold text-xs">
          Score
        </span>
        <span className="text-neutral-dark font-bold text-4xl tracking-[-0.1em]">
          {totalScore}
        </span>
      </div>
    </header>
  );
};

export { GameHeader };
