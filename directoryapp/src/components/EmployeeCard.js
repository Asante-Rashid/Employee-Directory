import React from "react";

function EmployeeCard(props) {
    return (
      <div>
         {props.picture} {props.name.first}
      </div>
    );
  }
  
  export default EmployeeCard;