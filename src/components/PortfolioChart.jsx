import { Line } from "react-chartjs-2";
import { chartData, chartOptions } from '../charts/portfolioChart'

const PortfolioChart = () => {
    return (
        <div className='lg:col-span-5 p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl'>
            <div className='flex justify-between items-center mb-8'>
                <h3 className='font-bold text-lg'>Portfolio Performance</h3>
                <select className='bg-transparent text-slate-400 text-xs font-bold outline-none cursor-pointer'>
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                </select>
            </div>
            <div className='h-55 w-full'>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}

export default PortfolioChart