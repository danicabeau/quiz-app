import { useState } from 'react';
import Quiz from './component/quiz';
import Score from './component/Score';
import Menu from './component/Menu';
import './App.css';

export const DataContext =  React.createContext();

function App() {
  const [appState, setAppState] = useState("menu");
  return (
    <DataContext.Provider value={{appState, setAppState}}>
    <div className="App">
      <h1>Web Development Quiz</h1>
      {appState === "menu" && <Menu />}
      {appState === "quiz" && <Quiz />}
      {appState === "score" && <Score />}
    </div>
    </DataContext.Provider>
  );
}

export default App;
