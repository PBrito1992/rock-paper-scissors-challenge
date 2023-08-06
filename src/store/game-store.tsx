import { GameItemType } from "@/components/game-item";
import {
  createContext,
  useContext,
  FC,
  PropsWithChildren,
  useReducer,
  Dispatch,
  useMemo,
} from "react";

type Winner = "player" | "house" | "draw";

type TGameState = {
  picked: GameItemType | null;
  housePicked: GameItemType | null;
  totalScore: number;
  winner: Winner | null;
};

type ADD_PICKED = "ADD_PICKED";
type ADD_HOUSE_PICKED = "ADD_HOUSE_PICKED";
type PLAY_AGAIN = "PLAY_AGAIN";

type TGameAction =
  | {
      type: ADD_PICKED | ADD_HOUSE_PICKED;
      payload: GameItemType;
    }
  | {
      type: PLAY_AGAIN;
    };

type TGameStore = {
  dispatch: Dispatch<TGameAction>;
} & TGameState;

const storeDefaultValues: TGameState = {
  picked: null,
  housePicked: null,
  totalScore: 0,
  winner: null,
};

const GameStore = createContext<TGameStore>({
  ...storeDefaultValues,
  dispatch: () => {},
});

const getWinner = (state: TGameState): Winner => {
  if (state.picked === state.housePicked) return "draw";

  if (
    (state.picked === GameItemType.Paper &&
      state.housePicked === GameItemType.Rock) ||
    (state.picked === GameItemType.Rock &&
      state.housePicked === GameItemType.Scissors) ||
    (state.picked === GameItemType.Scissors &&
      state.housePicked === GameItemType.Paper)
  ) {
    return "player";
  }

  return "house";
};

const reducer = (state: TGameState, action: TGameAction): TGameState => {
  switch (action.type) {
    case "ADD_PICKED":
      return { ...state, picked: action.payload };
    case "ADD_HOUSE_PICKED": {
      const newState = { ...state, housePicked: action.payload };
      console.log(state.totalScore);
      const winner = getWinner(newState);
      console.log({ winner });
      const totalScore =
        winner === "player" ? state.totalScore + 1 : state.totalScore;
      console.log({ totalScore });

      return {
        ...newState,
        winner,
        totalScore,
      };
    }
    case "PLAY_AGAIN": {
      return {
        ...storeDefaultValues,
        totalScore: state.totalScore,
      };
    }
    default:
      return state;
  }
};

const setPicked = (dispatch: Dispatch<TGameAction>, payload: GameItemType) =>
  dispatch({ type: "ADD_PICKED", payload });
const setHousePicked = (
  dispatch: Dispatch<TGameAction>,
  payload: GameItemType
) => dispatch({ type: "ADD_HOUSE_PICKED", payload });
const playAgain = (dispatch: Dispatch<TGameAction>) =>
  dispatch({ type: "PLAY_AGAIN" });

const GameStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, storeDefaultValues);

  const ctxValue = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state]
  );

  return <GameStore.Provider value={ctxValue}>{children}</GameStore.Provider>;
};

const useGameStore = () => {
  const ctx = useContext(GameStore);

  if (!ctx)
    throw new Error("useGameStore must be used within a GameStoreProvider!");

  return ctx;
};

export {
  GameStoreProvider,
  useGameStore,
  setPicked,
  setHousePicked,
  playAgain,
};
