import Controller from "../services/Controller.js";

class HomeController extends Controller {
  constructor() {
    super();
  }

  async index(req, res) {
    return res.render('home',{
      isAuthenticated:req.isAuthenticated(),
      nombre:req.user[0].firstname,
      apellido:req.user[0].lastName,
      email:req.user[0].email,
      avatar:req.user[0].avatar
    });
  }
}

export default HomeController;
