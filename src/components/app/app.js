import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App() {
    const data = [
        {name:'John C.', salary: 2000, isIncrease: false, id: 1},
        {name:'Kate A.', salary: 3000, isIncrease: true, id: 2},
        {name:'Sam O.', salary: 2500, isIncrease: false, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;