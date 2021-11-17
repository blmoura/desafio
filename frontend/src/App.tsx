import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { CreateInsight } from "./pages/CreateInsight";
import { FeedInsight } from "./pages/FeedInsight";
import { GlobalStyles } from "./styles/global";

function App() {
  return (  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FeedInsight />} />
        <Route path="/create" element={<CreateInsight />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>    
  );
}

export default App;
