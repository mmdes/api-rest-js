class HomeController {
  async store(req, res) {
    res.json('Index');
  }
}

export default new HomeController();
