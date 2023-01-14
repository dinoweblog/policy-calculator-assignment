import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
