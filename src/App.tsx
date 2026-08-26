
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Learninghub from "./pages/learninghub"
import Home from "./pages/Home";
import CoursePage from "./pages/coursepage";
import Stories from "./pages/stories";

export default function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/learninghub" element={<Learninghub/>} />
                <Route path="/stories" element={<Stories/>}/>
                <Route path="/learning/web-development"element={<CoursePage />}
/>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}

