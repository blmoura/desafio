import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";

function App() {
  return (  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>    
  );
}

export default App;
