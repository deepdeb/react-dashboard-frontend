import { tableData } from "../data/dashboardData"

const TransactionTable = () => {
    return (
        <section className='bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl overflow-hidden'>
            <div className='p-8 border-b border-white/5 flex justify-between items-center'>
                <h3 className='text-xl font-bold'>Transaction History</h3>
                <button className='text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest'>
                    Export CSV
                </button>
            </div>
            <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                    <thead>
                        <tr className='text-slate-500 text-[10px] uppercase tracking-[0.2em]'>
                            <th className='px-8 py-4 font-semibold'>Asset Name</th>
                            <th className='px-8 py-4 font-semibold'>Date</th>
                            <th className='px-8 py-4 font-semibold'>Price</th>
                            <th className='px-8 py-4 font-semibold'>Status</th>
                            <th className='px-8 py-4 font-semibold text-right'>24h Change</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-white/5'>
                        {tableData.map((item, i) => (
                            <tr key={i} className='group hover:bg-white/2 transition-colors cursor-pointer'>
                                <td className='px-8 py-5 font-bold text-slate-200'>{item.name}</td>
                                <td className='px-8 py-5 text-sm text-slate-400'>{item.date}</td>
                                <td className='px-8 py-5 font-mono text-sm'>{item.price}</td>
                                <td className='px-8 py-5'>
                                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md border ${item.status === 'Success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className={`px-8 py-5 text-right font-bold ${item.pos ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {item.change}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default TransactionTable