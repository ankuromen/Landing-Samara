import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Classicpage from './Pages/Classicpage'
import Professional from './Pages/Professional'
import Layout from "./Pages/Layout";
import AboutPage from "./Pages/AboutPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/classic" element={<Classicpage />} />
        <Route path="/professional" element={<Professional/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
