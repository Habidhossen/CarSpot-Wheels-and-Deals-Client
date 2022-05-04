import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddInventory from "./components/AddInventory/AddInventory";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import InventoryItems from "./components/InventoryItems/InventoryItems";
import Login from "./components/Login/Login";
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/inventory" element={<InventoryItems />} />
        <Route
          path="/add-inventory"
          element={
            <RequireAuth>
              <AddInventory />
            </RequireAuth>
          }
        />
        <Route path="/inventory/:inventoryID" element={<UpdateInventory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
