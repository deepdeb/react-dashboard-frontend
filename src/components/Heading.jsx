

const Heading = ({title, subtitle}) => {
    return (
        <div>
            <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
            <p className='text-slate-400 text-sm mt-1'>{subtitle}</p>
        </div>
    )
}

export default Heading