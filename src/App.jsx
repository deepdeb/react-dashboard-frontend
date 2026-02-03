import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import CreditCard from "./pages/CreditCard";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Overview from "./pages/Overview";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/credit-card" element={<CreditCard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App