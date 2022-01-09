import "./App.css";
import { useEffect } from "react";
import AddTransactions from "./components/AddTransactions";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  useEffect(() => {
    document.title = "Expense Tracker"
    return () => {
      // cleanup
    }
  }, [])
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
