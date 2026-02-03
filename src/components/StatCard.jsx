const StatCard = ({ title, icon, content, subcontent }) => {
    return (
        <div className="p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl">
            <div className="flex items-center justify-between mb-6">
                <span className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                    {title}
                </span>
                <div className="text-indigo-400">
                    {icon}
                </div>
            </div>
            <h2 className="text-3xl font-bold">{content}</h2>
            <p className="text-emerald-400 text-sm mt-2">{subcontent}</p>
        </div>
    )
}

export default StatCard