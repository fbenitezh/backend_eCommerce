import Controller from '../services/Controller.js';

class UserController extends Controller {

    /*******************/
    // Views methods
    /*******************/

    getLogin(req,res){
      const isAuthenticated = req.isAuthenticated();
      if(isAuthenticated){
        res.redirect('/');
      }else{
        res.render('login',{});
      }
    }
    
    getsignUp(req,res){
      const isAuthenticated = req.isAuthenticated();
      if(isAuthenticated){
        res.redirect('/');
      }else{
        res.render('signup',{});
      }
    }
    
    getFailLogin(req,res){
      res.render('login-error',{});
    }

    postLogin(req,res){
      if(req.isAuthenticated()){
        res.redirect("/");
      }else{
        // res.sendFile(path.resolve() + '/src/views/index.html');
      }
    }
    
    postSignUp(req,res){
      console.log(req.file);
      const isAuthenticated = req.isAuthenticated();
      if(isAuthenticated){
        return res.redirect('/');
      }
      // res.sendFile(path.resolve() + '/src/views/index.html');
    }
    
    getFailSignUp(req,res){
      res.render('signup-error',{});
    }
    
    logout(req,res){
      req.session.destroy(err=>{
        if(!err){
          res.redirect("/");
        }
      })
    }
}

export default UserController;