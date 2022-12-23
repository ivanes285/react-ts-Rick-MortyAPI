import "./App.css";
import { CharacterList, Hero, Pagination } from "./components";

function App() {
  return (
    <div className="w-11/12  mx-auto flex  flex-col text-center items-center ">
      <Hero />
      <CharacterList />
    </div>
  );
}

export default App;
