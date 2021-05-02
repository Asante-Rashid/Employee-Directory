import React, { Component } from "react";
import API from "../utils/API";
import EmployeeCard from "../components/EmployeeCard";

class Table extends Component {
    state = {
     Employees: [],
          };
  
          // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ Employees: res.data.message }))
      .catch(err => console.log(err));
  }

  render() {
    return (
<div>
    <EmployeeCard/>
</div>
    );
  }
}

export default Table;