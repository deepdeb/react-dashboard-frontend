import { FiBell, FiSearch } from 'react-icons/fi'
import Heading from './Heading'

const Header = () => {
    return (
        <header className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10'>
            <Heading title="Financial Overview" subtitle="Welcome back, Pradeep Debnath." />
            
            <div className='flex items-center gap-4 w-full md:w-auto'>
                <div className='relative flex-1 md:w-64'>
                    <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-500' />
                    <input
                        type="text"
                        placeholder="Search assets..."
                        className='w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-sm'
                    />
                </div>
                <button className='relative p-2 text-slate-400 hover:text-white transition-colors'>
                    <FiBell size={20} />
                    <span className='absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#020617]'></span>
                </button>
                <div className='flex items-center gap-3 pl-4 border-l border-white/10'>
                    <img src="https://i.pravatar.cc/40" alt="user" className='rounded-full ring-2 ring-indigo-500/20' />
                </div>
            </div>
        </header>
    )
}

export default Header