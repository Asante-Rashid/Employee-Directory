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

    // changes the filter/search criteria on every key click in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value });
        // const currentState = [this.state.Employees]
        // console.log(currentState)
        this.handleFilter(this.state.search)
    };

    handleFilter(search) {
        const updatedList = this.state.Employees.map(employee => {
            if (employee.name.first === search) {
                // Employees.filter()
                const filteredEmployees = this.state.Employees.filter(employee => employee.name.first === search)
                console.log(filteredEmployees)
                return { ...this.state, Employees: filteredEmployees}
            }
            return {...this.state};
        });
        this.setState(updatedList);
       
    }

    render() {
        return (
            <div>
                <SearchBar
                    handleInputChange={this.handleInputChange}
                    Employees={this.state.Employees}
                />
                {this.state.Employees.map(employee => (
                    <EmployeeCard
                        key={employee.login.md5}
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