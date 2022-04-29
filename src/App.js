import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
