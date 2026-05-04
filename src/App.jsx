import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* ✅ FIXED ROUTE */}
          <Route path="/country/:code" element={<CountryPage />} />

          <Route path="/favourites" element={<div>Favourites Page</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;