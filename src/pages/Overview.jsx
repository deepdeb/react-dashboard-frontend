import Header from '../components/Header';
import SpendingCard from '../components/SpendingCard';
import PortfolioChart from "../components/PortfolioChart";
import CreditHealthCard from "../components/CreditHealthCard";
import TransactionTable from "../components/TransactionTable";

const Overview = () => {
    return (
        <>
            <Header />

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8'>
                <SpendingCard />
                <PortfolioChart />
                <CreditHealthCard />
            </div>

            <TransactionTable />
        </>
    )
}

export default Overview