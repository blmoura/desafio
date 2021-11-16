import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { FeedInsight } from "./pages/FeedInsight";
import { GlobalStyles } from "./styles/global";

function App() {
  return (  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FeedInsight />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>    
  );
}

export default App;
