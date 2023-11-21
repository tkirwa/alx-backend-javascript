const fs = require("fs").promises;

async function countStudents(path) {
  let data;

  try {
    data = await fs.readFile(path, { encoding: "utf8" });
  } catch (err) {
    throw new Error("Cannot load the database");
  }

  let lines = data.split("\n");
  lines = lines.filter((line) => line.length > 0 && line.includes(","));

  console.log(`Number of students: ${lines.length}`);

  const fields = {};
  for (const line of lines) {
    const student = line.split(",");
    if (!fields[student[3]]) fields[student[3]] = [];
    fields[student[3]].push(student[0]);
  }

  for (const field in fields) {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[
        field
      ].join(", ")}`
    );
  }
}

module.exports = countStudents;
