const usersCtrl = {};

const passport = require('passport');

const User = require ('../models/Usuario');
const Usuario = require('../models/Usuario');

usersCtrl.renderSignUpForm =  (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const  errors = [];
    const {Nombre,ApPaterno, ApMaterno,Email,Tipo,Pais,Tel,Fecha_Nac,password,confirm_password } = req.body;
    if (password != confirm_password){
        errors.push({text: 'Password do not match'});
    }
    if (password.length <4){
        errors.push({text: 'Passwords must be at least 4 characters'});
    } 
    if (errors.length > 0){
        res.render('users/signup', {
            errors,
            Nombre, 
            ApPaterno, 
            ApMaterno,
            Email,
            Tipo,
            Pais,
            Tel,
            Fecha_Nac,
            password,
            confirm_password

        })
    }else {
        const emailUser = await User.findOne({Email: Email});
        if (emailUser){
            req.flash('error_msg', 'Es correo ya se encuentra en uso');
            res.redirect('/users/signup');
        }else {
            const newUser = new Usuario ({Nombre,ApPaterno, ApMaterno, Email,Tipo, Pais, Tel, Fecha_Nac,password })
            newUser.password = await newUser.encryptPassword (password)
            await newUser.save();
            req.flash('success_msg', 'Te haz registrado de manera exitosa');
            res.redirect('/users/signin');
        }
    }
};

usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local',{
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
});

usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg','Haz salido de MOYORLO');
    res.redirect('/users/signin');
};
module.exports = usersCtrl;