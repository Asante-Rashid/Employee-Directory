import React from "react";

function SearchBar(props) {
    return (
        <form className="search">
        <div className="form-group">
        
          <input
            value={props.search}
            type="text"
            className="form-control"
            placeholder="search"
            id="breed"
          />
          {/* <datalist id="breeds">
            {props.breeds.map(breed => (
              <option value={breed} key={breed} />
            ))}
          </datalist> */}
          {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button> */}
        </div>
      </form>
    );
}

export default SearchBar;