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
                {name:'John C.', salary: 2000, isIncrease: false, id: 114, isLiked: false},
                {name:'Kate A.', salary: 3000, isIncrease: true, id: 202, isLiked: true},
                {name:'Sam O.', salary: 2500, isIncrease: false, id: 31, isLiked: false}
            ]
        }

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
            id: +(Math.floor(Math.random() * (Math.max - Math.min)) + Math.min)
        }
        this.setState(({data})=>{
            return{
                data : [...data, newItem]
            }
        })
    }

    render(){    
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;