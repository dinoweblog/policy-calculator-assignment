import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";
import { Illustration } from "./components/Illustration";
import { AppLayout } from "./AppLayout";
import { PolicyCalculator } from "./components/policyCalculator/PolicyCalculator";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Login />} />
      <Route path="/policy-calculator" element={<PolicyCalculator />} />
      <Route path="/illustration" element={<Illustration />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  </Routes>
);
export default AppRoutes;
