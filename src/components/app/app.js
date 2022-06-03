import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {name:'John C.', salary: 2000, isIncrease: false, id: 2, isLiked: true},
                {name:'Kate A.', salary: 3000, isIncrease: true, id: 3, isLiked: false},
                {name:'Sam O.', salary: 2500, isIncrease: false, id: 1, isLiked: false}
            ],
            term: '',
            filter: 'like'
        }
        this.maxId = 4;
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            isIncrease: false,
            isLiked: false,
            id: this.maxId++
        }
        this.setState(({data})=>{
            return{
                data : [...data, newItem]
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, isIncrease: !item.isIncrease}
                }
                return item;
            })
        }))
    }

    
    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, isLiked: !item.isLiked}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }
    
    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.isLiked);
            case 'moreThan1000':
                return items.filter(item => item.salary>1000)
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render(){  
        const {data, term, filter} = this.state;
        const employeesNumber = this.state.data.length;
        const increaseEmployees = this.state.data.filter(item => item.isIncrease).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo employeesNumber={employeesNumber}
                increaseEmployees={increaseEmployees}/>
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect2={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;