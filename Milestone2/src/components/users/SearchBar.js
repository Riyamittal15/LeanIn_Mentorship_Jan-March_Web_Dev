import classes from "./searchBar.module.css";
const SearchBar = ({query, onChange}) => {
    return(
        <div className={classes.container}>
            <div className={classes.input_box}>
                <label htmlFor="search">Enter year:</label>
                <input
                type="number"
                id="search"
                value={query}
                onChange={onChange}
                placeholder="enter the particular expense year"
                autoComplete="off"
                />
            </div>    
        </div>
    );
};

export default SearchBar;