import React from "react";

function EmployeeCard(props) {
    return (
      <div>
         <img alt={props.FirstName} src={props.picture} />
          {props.FirstName} {props.LastName}, Age: {props.DoB}, email: {props.Email}
         
      </div>
    );
  }
  
  export default EmployeeCard;