import Controller from '../services/Controller.js';
import Nodemailer from '../utils/nodemailer.class.js';
import {config} from '../config/index.js';
const nodemailer = new Nodemailer();

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
    
    async postSignUp(req,res){
      const isAuthenticated = req.isAuthenticated();
      if(isAuthenticated){
        const content = `
          <ul>
            <li>Email: ${req.body.username} <li>
            <li>Nombre: ${req.body.firstname}<li>
            <li>Apellido: ${req.body.lastname}<li>
            <li>Dirección: ${req.body.address}<li>
            <li>Edad: ${req.body.years}<li>
            <li>Celular: ${req.body.phone}<li>
          </ul>
        `;
        await nodemailer.send(process.env.EMAIL_GMAIL,"Nuevo registro",config.admin.email,content);
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