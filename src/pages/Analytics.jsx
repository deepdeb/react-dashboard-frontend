import { FiTrendingUp, FiUsers, FiDollarSign } from "react-icons/fi";
import PortfolioChart from "../components/PortfolioChart";
import Heading from "../components/Heading";
import StatCard from "../components/StatCard";

const Analytics = () => {
    return (
        <>
            <Heading title="Analytics" subtitle="Track portfolio and performance insights." />

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-10">
                <StatCard title="Revenue" icon={<FiDollarSign />} content="$82,490" subcontent="+12.4% this month" />
                <StatCard title="Active Users" icon={<FiUsers />} content="12,480" subcontent="+5.1% growth" />
                <StatCard title="Growth Rate" icon={<FiTrendingUp />} content="24.8%" subcontent="Up from last week" />
            </div>

            <PortfolioChart />
        </>
    );
};

export default Analytics;