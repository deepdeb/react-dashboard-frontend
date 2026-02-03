import { NavLink } from "react-router-dom";
import { FiCreditCard, FiHome, FiPieChart, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const base =
    "p-3 rounded-2xl transition-all flex items-center justify-center";

  const active =
    "bg-indigo-600 text-white shadow-lg shadow-indigo-500/40";

  const inactive =
    "text-slate-500 hover:text-indigo-400 hover:bg-slate-900";

  return (
    <aside className="hidden md:flex w-24 flex-col items-center py-8 bg-slate-950/50 border-r border-white/5">
      <div className="mb-12 text-2xl font-black bg-linear-to-br from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        A.
      </div>

      <nav className="flex flex-col space-y-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          <FiHome size={22} />
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          <FiPieChart size={22} />
        </NavLink>

        <NavLink
          to="/credit-card"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          <FiCreditCard size={22} />
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          <FiSettings size={22} />
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
