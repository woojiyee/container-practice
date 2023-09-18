import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HealthCheck } from "./HealthCheck";
import { Home } from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthcheck" element={<HealthCheck />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
