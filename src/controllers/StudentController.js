import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    return res.json(students);
  }
}

export default new StudentController();
