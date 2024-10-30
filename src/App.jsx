import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyEmail from "./pages/auth/VerifyEmail";
function App() {
  return (
    // <div className="bg-auth">
    //   <h1>neddnekend</h1>
    // </div>
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="verify-email" element={<VerifyEmail />} />
      </Route>
    </Routes>
  );
}

export default App;
