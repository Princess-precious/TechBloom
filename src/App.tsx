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
import Home from "./pages/Home";
// import CoursePage from "./pages/coursepage";
import Stories from "./pages/stories";
import LearningHub from "./pages/learninghub";
import Quiz from "./pages/Quiz";
import {Toaster} from "sonner";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/stories" element={<Stories/>}/>

        <Route path="/learninghub" element={<LearningHub/>}/>

        <Route path="/quiz" element={<Quiz/>}/> 
      </Routes>
        <Toaster/>
    </BrowserRouter>
  );
}
