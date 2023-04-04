import { useState } from 'react';
import './App.css';
import Questions from './components/Questions';
import Results from './components/Results';


function App() {
  const[score, setScore] = useState(0);
  const[showResult, setResult] = useState(false);
  const[currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="App">
      {showResult ?
        <Results score={score} setScore={setScore} setResult={setResult} setCurrentQuestion={setCurrentQuestion}/>
      :
        <Questions currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} score={score} setScore={setScore} setResult={setResult}/>
      }
    </div>
  );
}

export default App;
