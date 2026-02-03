
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import Sidebar from '../components/Sidebar';
import { Outlet } from "react-router-dom";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);


function Dashboard() {
  return (
    <div className='flex h-screen w-full bg-[#020617] text-slate-50 font-sans selection:bg-indigo-500/30'>
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-6 lg:p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;