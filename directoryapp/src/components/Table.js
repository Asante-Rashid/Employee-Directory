import React, { Component } from "react";
import API from "../utils/API";
import EmployeeCard from "../components/EmployeeCard";

class Table extends Component {
    state = {
        Employees: {},
    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        this.loadEmployees();
    }

    loadEmployees = () => {
        API.getEmployees()
          .then(res =>
            this.setState({
              Employees: res.data
            })
          )
          .catch(err => console.log(err));
      };

    render() {
        return (
            <div>
                {this.state.Employees.map(employee => (
                    <EmployeeCard
                        id={employee.id}
                        key={employee.id}
                        // need to pass more variables to be used as props.whatevers in the employeecard
                    />
                ))}
            </div>

        );
    }
}

export default Table;