import { FiCreditCard } from 'react-icons/fi'

const CreditCardCard = ({ card }) => {
    return (
        <div
            className="p-8 bg-linear-to-br from-indigo-600 to-violet-700 rounded-4xl shadow-xl shadow-indigo-500/10 text-white"
        >
            <div className="flex justify-between mb-10">
                <FiCreditCard size={28} />
                <span className="text-indigo-100 text-sm">
                    {card.bank}
                </span>
            </div>

            <h3 className="text-2xl font-bold tracking-widest mb-6">
                {card.number}
            </h3>

            <div className="flex justify-between text-sm text-indigo-100">
                <div>
                    <p className="text-xs opacity-70">Card Holder Name</p>
                    <p>{card.holder}</p>
                </div>

                <div>
                    <p className="text-xs opacity-70">Expires</p>
                    <p>{card.expiry}</p>
                </div>

                <div>
                    <p className="text-xs opacity-70">Balance</p>
                    <p className="font-bold">{card.balance}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCardCard