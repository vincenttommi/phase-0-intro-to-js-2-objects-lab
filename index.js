// Write your solution in this file!


// Initialize employee Object
let employee = {
    name: "John Smith",
    streetAddress: "123 Main St"
  };
  
  // Update employee Object with key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
  }
  
  // Destructively update employee Object with key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Delete key-value pair from employee Object
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Destructively delete key-value pair from employee Object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  