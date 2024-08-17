import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    try {
      if (!req.body) {
        return res.status(400).json({
          errors: ['You must send user data.'],
        });
      }
      const newStudent = await Student.create(req.body);
      return res.status(200).json(newStudent);
    } catch (e) {
      if (e.errors && e.errors.length > 0) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } if (e.parent && e.parent.sqlMessage) {
        return res.status(400).json({
          errors: e.parent.sqlMessage,
        });
      }
      return res.status(400).json(null);
    }
  }

  async index(req, res) {
    try {
      const students = await Student.findAll();
      return res.json(students);
    } catch (e) {
      if (e.errors && e.errors.length > 0) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } if (e.parent && e.parent.sqlMessage) {
        return res.status(400).json({
          errors: e.parent.sqlMessage,
        });
      }
      return res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist.'],
        });
      }
      return res.status(200).json(student);
    } catch (e) {
      if (e.errors && e.errors.length > 0) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } if (e.parent && e.parent.sqlMessage) {
        return res.status(400).json({
          errors: e.parent.sqlMessage,
        });
      }
      return res.status(400).json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist.'],
        });
      }
      if (!req.body) {
        return res.status(400).json({
          errors: ['You should send user data.'],
        });
      }
      const updatedStudent = await student.update(req.json);
      return res.status(200).json(updatedStudent);
    } catch (e) {
      if (e.errors && e.errors.length > 0) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } if (e.parent && e.parent.sqlMessage) {
        return res.status(400).json({
          errors: e.parent.sqlMessage,
        });
      }
      return res.status(400).json(null);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist.'],
        });
      }
      await student.destroy();

      return res.status(200).json(
        { success: 'User has just been successfully deleted.' },
      );
    } catch (e) {
      if (e.errors && e.errors.length > 0) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } if (e.parent && e.parent.sqlMessage) {
        return res.status(400).json({
          errors: e.parent.sqlMessage,
        });
      }
      return res.status(400).json(null);
    }
  }
}

export default new StudentController();
