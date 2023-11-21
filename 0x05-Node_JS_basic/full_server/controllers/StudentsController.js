const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents (req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      res.status(200).send(`This is the list of our students\n${data}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor (req, res) {
    if (!['CS', 'SWE'].includes(req.params.major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(process.argv[2]);
      res.status(200).send(data[req.params.major]);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
