import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { SortingTable } from "./components/SortingTable";
import { RowSelection } from "./components/RowSelection";
import { ColumnOrder } from "./components/ColumnOrder";
import { ColumnHiding } from "./components/ColumnHiding";

function App() {
  return (
    <div className='App'>
      <ColumnHiding />
    </div>
  );
}

export default App;
