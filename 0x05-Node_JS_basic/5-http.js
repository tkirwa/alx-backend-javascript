// Importing necessary modules
const http = require("http");
const fs = require("fs");

// Read the database file
const databaseFile = process.argv[2];
const databaseContent = fs.readFileSync(databaseFile, "utf8").split("\n");

// Create HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Handling requests based on URL path
  if (req.url === "/") {
    res.end("Hello Holberton School!\n");
  } else if (req.url === "/students") {
    // Filtering out empty lines from the database content
    const students = databaseContent.filter((line) => line.trim() !== "");

    // Displaying the list of students
    res.write("This is the list of our students\n");
    res.write(`Number of students: ${students.length}\n`);

    const csStudents = students.filter(
      (student) => student.split(",")[3] === "CS"
    );
    const sweStudents = students.filter(
      (student) => student.split(",")[3] === "SWE"
    );

    res.write(
      `Number of students in CS: ${csStudents.length}. List: ${csStudents
        .map((student) => student.split(",")[0])
        .join(", ")}\n`
    );
    res.write(
      `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents
        .map((student) => student.split(",")[0])
        .join(", ")}\n`
    );

    res.end();
  } else {
    // If the URL path is not recognized
    res.statusCode = 404;
    res.end("Not Found\n");
  }
});

// Listening on port 1245
app.listen(1245);

// Exporting the app
module.exports = app;
