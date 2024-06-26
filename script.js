// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeeArray = []
   let keepGoing = true
  
  while (keepGoing) {
    const employeeFirstName = prompt("Whats your first name?")
    const employeeLastName = prompt("Whats your last name?")
    const employeeSalary = prompt("Whats your salary?")

    const employeeObj = {
      firstName: employeeFirstName,
      lastName: employeeLastName,
      salary: employeeSalary
    }

    employeeArray.push(employeeObj)

     const toContinue = confirm("Do you want to add another employee?")

     keepGoing = toContinue

   
  }

  console.log(employeeArray)
  return employeeArray

}


// const employeeArray = [firstName, lastName, salary]

// Display the average salary
const displayAverageSalary = function(employeesArray) {

totalSalary = 0 

employeesArray.forEach (employee => {
  totalSalary += Number(employee.salary)
})

const averageSalary = totalSalary/ employeesArray.length
console.log(averageSalary)
  // TODO: Calculate and display the average salary
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  // Check if the array is not empty
  if (employeesArray.length === 0) {
    console.log("No employees in the array.");
    return null; 
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  
  // Logging the index and the name for demonstration
  console.log(`Random Index: ${randomIndex}`);
  console.log(`Congrats! the random winner is: ${randomEmployee.firstName}`);
  
  return randomEmployee;
}
 
  // TODO: Select and display a random employee

  



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
