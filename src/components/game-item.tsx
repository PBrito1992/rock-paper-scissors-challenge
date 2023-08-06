import { FC, useMemo } from "react";
import IconPaper from "/images/icon-paper.svg";
import IconRock from "/images/icon-rock.svg";
import IconScissors from "/images/icon-scissors.svg";

export enum GameItemType {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}

export type TGameItem = {
  type: GameItemType | null;
  onClick?: () => void;
  isWinner?: boolean;
};

const GameItemImage: Record<GameItemType, string> = {
  [GameItemType.Paper]: IconPaper,
  [GameItemType.Rock]: IconRock,
  [GameItemType.Scissors]: IconScissors,
};

const GameItemClassName: Record<
  GameItemType,
  { background: string; shadow: string }
> = {
  [GameItemType.Paper]: {
    background: "from-primary-paper-origin to-primary-paper-to",
    shadow: "shadow-primary-paper-shadow",
  },
  [GameItemType.Rock]: {
    background: "from-primary-rock-origin to-primary-rock-to",
    shadow: "shadow-primary-rock-shadow",
  },
  [GameItemType.Scissors]: {
    background: "from-primary-scissors-origin to-primary-scissors-to",
    shadow: "shadow-primary-scissors-shadow",
  },
};

const GameItem: FC<TGameItem> = ({ type, isWinner = false, onClick }) => {
  const image = useMemo(() => type && GameItemImage[type], [type]);
  const className = useMemo(
    () => (type && GameItemClassName[type]) || "",
    [type]
  );

  return (
    <div
      className={`w-fit p-3 lg:p-5 rounded-full cursor-pointer ${
        type ? "bg-gradient-to-br shadow-[0_5px_0]" : ""
      } ${className ? className?.background : "bg-transparent"} ${
        isWinner
          ? "shadow-game-item-winner-mb lg:shadow-game-item-winner"
          : className
          ? className.shadow
          : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`flex justify-center items-center w-24 lg:w-48 h-24 lg:h-48 rounded-full ${
          type ? "bg-white shadow-game-item-shadow" : "bg-black bg-opacity-20"
        }`}
      >
        {image && <img src={image} />}
      </div>
    </div>
  );
};

export { GameItem };
