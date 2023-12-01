import { useState } from 'react';
import validator from 'validator';


const SearchBar = (props) => {

    const [errorMessage, setErrorMessage] = useState("")

    const validSearchRequest = (word) => {
        if (validator.isNumeric(word.trim())) {
            setErrorMessage("Invalid input. Please enter a non-numeric value.")
            return false;
        } 

        if (validator.isEmpty(word, {ignore_whitespace: true})) {
            setErrorMessage("Input cannot be empty. Please enter a valid value.")
            return false;
        }

        setErrorMessage("")
        return true;
    } 

    const openSideBar = () => {
        const resultsDiv = document.querySelector('.results');
        
        if (resultsDiv.style.width === "40%") {
            return
        }

        resultsDiv.style.width = "40%";
        resultsDiv.style.padding = "0 30px"
    }

    const search = (e) => {
        e.preventDefault();
        const searchRequest = e.target.querySelector('input').value;

        if (validSearchRequest(searchRequest)) {
            props.searchFunc(searchRequest)
            
            openSideBar()
        }
        
    }


    return (
        <div className="search-page">
            <form onSubmit={search}>
                <h1>Find That Country</h1>
                <div className="form-inputs">
                    <div className="input-wrapper">
                        <input required placeholder="Search Country..." />
                    </div>
                </div>
                <div className="form-submit">
                    <button type="submit">Search</button>
                </div>
                {errorMessage !== "" ? <b style={{color:'red'}} id="error-message">{errorMessage}</b> : null}
            </form>
        </div>
    )
}

export default SearchBar;