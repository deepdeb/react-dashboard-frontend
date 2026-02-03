import { FiPlus } from "react-icons/fi";
import Heading from "../components/Heading";
import CreditCardCard from "../components/CreditCardCard";

const cards = [
  {
    bank: "Axis Bank",
    number: "**** 4821",
    holder: "Pradeep Debnath",
    expiry: "08/27",
    balance: "$12,480",
  },
  {
    bank: "HDFC Bank",
    number: "**** 9054",
    holder: "Pradeep Debnath",
    expiry: "11/26",
    balance: "$4,320",
  },
];

const transactions = [
  { merchant: "Amazon", date: "12 Jun", amount: "-$120.50" },
  { merchant: "Netflix", date: "10 Jun", amount: "-$14.99" },
  { merchant: "Uber", date: "8 Jun", amount: "-$24.20" },
  { merchant: "Salary Credit", date: "1 Jun", amount: "+$2,000.00" },
];

const CreditCard = () => {
  return (
    <>
      <Heading
        title="Credit Cards"
        subtitle="Manage cards and track spending."
      />

      <div className="flex flex-col gap-8 mt-10">
        {/* Card List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <CreditCardCard card={card} key={i} />
          ))}
        </div>

        {/* Add Card */}
        <button className="flex flex-col items-center justify-center gap-3 p-8 border border-dashed border-white/20 rounded-4xl text-slate-400 hover:text-white hover:border-indigo-400 transition-all">
          <FiPlus size={28} />
          Add New Card
        </button>

        {/* Transactions */}
        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl overflow-hidden">
          <div className="p-8 border-b border-white/5">
            <h3 className="text-xl font-bold">Recent Card Transactions</h3>
          </div>

          <div className="divide-y divide-white/5">
            {transactions.map((tx, i) => (
              <div
                key={i}
                className="flex justify-between px-8 py-5 hover:bg-white/5 transition-colors"
              >
                <div>
                  <p className="font-semibold">{tx.merchant}</p>
                  <p className="text-sm text-slate-400">{tx.date}</p>
                </div>

                <p
                  className={`font-bold ${tx.amount.startsWith("+")
                    ? "text-emerald-400"
                    : "text-rose-400"
                    }`}
                >
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CreditCard;
