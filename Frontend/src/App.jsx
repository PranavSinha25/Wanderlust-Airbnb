import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProperty from "./pages/AddProperty";
import Dashboard from "./pages/Dashboard";
import PropertyDetails from "./pages/PropertyDetails";
import EditProperty from "./pages/EditProperty";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/add-property" element={<AddProperty />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/property/:id" element={<PropertyDetails />} />

      <Route path="/edit-property/:id" element={<EditProperty />} />
    
    </Routes>
  );
}

export default App;