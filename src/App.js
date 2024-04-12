import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { MessagePage } from "./pages/MessagePage";
import PlayGround from "./Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/{id}/message" element={<MessagePage />} />
        <Route path="*" element={<PlayGround />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
