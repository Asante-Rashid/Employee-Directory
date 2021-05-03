import React, { Component } from "react";
import API from "../utils/API";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";

class Table extends Component {
    state = {
        Employees: [],
        search: "",
    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        this.loadEmployees();
    }

    loadEmployees = () => {
        API.getEmployees()
            .then(res =>
                this.setState({
                    Employees: res.data.results
                })
            )
            .catch(err => console.log(err))
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        console.log(this.state.search)
      };

    render() {
        return (
            <div>
                <SearchBar
                    handleInputChange={this.handleInputChange}
                    Employees={this.state.Employees}
                />
                {this.state.Employees.map(employee => (
                    <EmployeeCard
                        key={employee.id.value}
                        picture={employee.picture.thumbnail}
                        FirstName={employee.name.first}
                        LastName={employee.name.last}
                        Email={employee.email}
                        DoB={employee.dob.age}

                    // need to pass more variables to be used as props.whatevers in the employeecard
                    />
                ))}
            </div>

        );
    }
}

export default Table;