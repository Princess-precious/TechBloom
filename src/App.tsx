/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 24/08/2026 - 17:23:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learninghub from "./pages/learninghub";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/learninghub" element={<Learninghub />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}