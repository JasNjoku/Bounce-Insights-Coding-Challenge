const SearchBar = (props) => {

    
    const search = (e) => {
        e.preventDefault();
        const searchRequest = e.target.querySelector('input').value;

        props.searchFunc(searchRequest)
    }

    return (
        <form onSubmit={search}>
            <input placeholder="Country name"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;