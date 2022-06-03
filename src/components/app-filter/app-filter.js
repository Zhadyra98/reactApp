import './app-filter.css';


const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'like', label: 'Employees for up'},
        {name: 'moreThan1000', label: 'High salary emp'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const isActive = props.filter === name;
        const clazz = isActive ? 'btn-light' : 'btn-outline-light';
        return (
            <button className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect2(name)}>
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;