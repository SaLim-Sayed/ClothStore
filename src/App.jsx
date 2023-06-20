import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsList from "./components/ProductsList";
import NavBar from "./utils/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
