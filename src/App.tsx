import { RulesModal } from "@/components/rules-modal";
import { GameStoreProvider } from "@/store/game-store";
import { GameHeader } from "@/components/game-header";
import { GameBoard } from "@/components/game-board";

function App() {
  return (
    <GameStoreProvider>
      <div className="w-screen h-screen flex flex-col p-8 bg-gradient-to-br from-background-origin to-background-to">
        <GameHeader />
        <main className="flex-1 w-fit flex justify-center items-center mx-auto pt-14">
          <GameBoard />
        </main>
        <footer className="flex justify-center lg:justify-end">
          <RulesModal />
        </footer>
      </div>
    </GameStoreProvider>
  );
}

export default App;
