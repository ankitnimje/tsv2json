import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import JSONOutput from "./pages/JSONOutput";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<JSONOutput />} />
      </Routes>
    </>
  );
}

export default App;
