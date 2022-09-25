import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleOnsubmit(e) {
    e.preventDefault();
    const formData = { firstName: firstName, lastName: lastName }
    const dataArray=[...submittedData,formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
 
  }
  // Display form Data
  const displayFormData=submittedData.map((data,index)=>{
    return(
      <div key={index}>
        {data.firstName}
        {data.lastName}
      </div>
    );
  });


  return (
    <div>
    <form onSubmit={handleOnsubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
      <h3>Submissions</h3>
      {displayFormData}
      </div>
  );

}

export default Form;
