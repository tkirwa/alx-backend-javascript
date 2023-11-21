const fs = require('fs').promises;

async function readDatabase (filePath) {
  let data;

  try {
    data = await fs.readFile(filePath, { encoding: 'utf8' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  let lines = data.split('\n');
  lines = lines.filter((line) => line.length > 0 && line.includes(','));

  const fields = {};
  for (const line of lines) {
    const student = line.split(',');
    if (!fields[student[3]]) fields[student[3]] = [];
    fields[student[3]].push(student[0]);
  }

  return fields;
}

module.exports = readDatabase;
