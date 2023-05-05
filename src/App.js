import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main';
import KeywordsResult from './components/keywordsResult';
import QuestionResult from './components/questionResult';
import UseKeywords from './components/useKeywords';
import UseQuestion from './components/useQuestion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/keywordsResult" element={<KeywordsResult />} />
          <Route exact path="/questionResult" element={<QuestionResult />} />
          <Route exact path="/useKeywords" element={<UseKeywords />} />
          <Route exact path="/useQuestion" element={<UseQuestion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
