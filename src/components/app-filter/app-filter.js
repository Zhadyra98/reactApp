import './app-filter.css';


const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light"
                    type="button">
                        All employees
            </button>
            <button className="btn btn-outline-light"
                    type="button">
                        Employees for up
            </button>
            <button className="btn btn-outline-light"
                    type="button">
                        High salary emp
            </button>
        </div>
    )
}

export default AppFilter;