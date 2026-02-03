import { FiArrowUpRight, FiPlus } from 'react-icons/fi'

const SpendingCard = () => {
    return (
        <div className='lg:col-span-4 p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl flex flex-col justify-between'>
            <div>
                <div className='flex justify-between items-start mb-6'>
                    <span className='text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]'>Monthly Spending</span>
                    <span className='bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1'>
                        +8.89% <FiArrowUpRight />
                    </span>
                </div>
                <h2 className='text-4xl font-bold mb-8'>$6,960.92</h2>
                <div className='space-y-4'>
                    <div className='flex justify-between items-center text-sm'>
                        <span className='text-slate-500'>24h Volume</span>
                        <span className='font-mono text-slate-200'>$84.42B</span>
                    </div>
                    <div className='flex justify-between items-center text-sm'>
                        <span className='text-slate-500'>Market Cap</span>
                        <span className='font-mono text-slate-200'>$804.42B</span>
                    </div>
                </div>
            </div>
            <button className='w-full mt-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2'>
                <FiPlus /> Add New Asset
            </button>
        </div>
    )
}

export default SpendingCard