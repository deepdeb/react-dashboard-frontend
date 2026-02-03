import React from 'react'

const CreditHealthCard = () => {
    return (
        <div className='lg:col-span-3 p-8 bg-linear-to-br from-indigo-600 to-violet-700 rounded-4xl text-center shadow-xl shadow-indigo-500/10 flex flex-col items-center justify-center'>
            <h3 className='text-indigo-100/70 text-xs font-bold uppercase tracking-widest mb-6'>Credit Health</h3>
            <div className='relative mb-6'>
                {/* Circular Progress Placeholder */}
                <div className='w-32 h-32 rounded-full border-10 border-white/10 flex items-center justify-center'>
                    <div className='absolute inset-0 w-32 h-32 rounded-full border-10 border-white border-t-transparent -rotate-45'></div>
                    <span className='text-3xl font-black text-white'>790</span>
                </div>
            </div>
            <p className='text-white font-bold text-lg'>Excellent</p>
            <p className='text-indigo-100/60 text-xs mt-1'>You're in the top 5% of users</p>
        </div>
    )
}

export default CreditHealthCard