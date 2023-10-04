// main.ts

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  // Create an array containing the student objects
  const studentsList: Student[] = [student1, student2];
  
  // Function to render the table
  function renderTable() {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);
    headerCell1.textContent = "First Name";
    headerCell2.textContent = "Location";
  
    for (const student of studentsList) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    }
  
    document.body.appendChild(table);
  }
  
  // Call the renderTable function to render the table
  renderTable();
  