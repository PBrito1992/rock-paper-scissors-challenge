import { GameItem, GameItemType, TGameItem } from "@/components/game-item";
import { FC } from "react";

type TGameItemPicked = {
  title: string;
  value: GameItemType | null;
} & Required<Pick<TGameItem, "isWinner">>;

const GameItemPicked: FC<TGameItemPicked> = ({ title, value, isWinner }) => (
  <div className="flex flex-col-reverse lg:flex-col gap-5 lg:gap-10 font-semibold text-white uppercase tracking-widest text-center text-xs lg:text-base">
    <span>{title}</span>
    <GameItem type={value} isWinner={isWinner} />
  </div>
);

export { GameItemPicked };
