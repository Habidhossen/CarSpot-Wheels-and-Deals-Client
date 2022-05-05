import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AddInventory from "./components/AddInventory/AddInventory";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import InventoryItems from "./components/InventoryItems/InventoryItems";
import Login from "./components/Login/Login";
import MyInventoryItem from "./components/MyInventoryItem/MyInventoryItem";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SignUp from "./components/SignUp/SignUp";
import UpdateInventory from "./components/UpdateInventory/UpdateInventory";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryItems />} />
        <Route
          path="/inventory/:inventoryID"
          element={
            <RequireAuth>
              <UpdateInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/add-inventory"
          element={
            <RequireAuth>
              <AddInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/my-inventory"
          element={
            <RequireAuth>
              <MyInventoryItem />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
