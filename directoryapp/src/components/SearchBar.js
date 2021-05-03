import React from "react";

function SearchBar(props) {
  return (
    <form className="search">
      <div className="form-group">

        <input
          value={props.search}
          type="text"
          onChange={props.handleInputChange}
          className="form-control"
          placeholder="search by first name"
          id="FirstName"
        />
        {/* datalist tag is used to provide an autocomplete feature.  */}
        <datalist id="Employees">
          {props.Employees.map(employee => (
            <option
              value={employee.name.first}
              key={employee.id.value}
            />
          ))}
        </datalist>
      </div>
    </form>
  );
}

export default SearchBar;