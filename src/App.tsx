
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Learninghub from "./pages/learninghub"
import Home from "./pages/Home";

export default function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/learninghub" element={<Learninghub/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}

