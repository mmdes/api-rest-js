import Student from '../models/Student';
// somente um modelo a ser seguido
class HomeController {
  async store(req, res) {
    const student = await Student.create({
      name: 'Matheus',
      last_name: 'Matos',
      email: 'matheus@email.com',
      age: 26,
      weight: 77.56,
      height: 1.8,
    });
    res.json(student);
  }
}

export default new HomeController();
