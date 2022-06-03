import './app-info.css';

const AppInfo = ({employeesNumber, increaseEmployees}) => {
    return (
        <div className="app-info">
            <h1>Information about our company workers</h1>
            <h2>Total number off employees : {employeesNumber}</h2>
            <h2>Extra salary will get : {increaseEmployees}</h2>
        </div>
    );
}

export default AppInfo;