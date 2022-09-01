import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Trivia from "./pages/Trivia";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} exact />
        <Route path="/trivia" element={<Trivia />} exact />
      </Routes>
    </div>
  );
}

export default App;
