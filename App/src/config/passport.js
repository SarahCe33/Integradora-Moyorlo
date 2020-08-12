const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require("../models/Usuario")

passport.use(new LocalStrategy({
    usernameField: 'Email',
    passwordField: 'password'
}, async (Email, password, done) =>{

    //Confirmar si existe el correo del usuario
    const user = await User.findOne({Email})
    if (!user){
        return done(null, false, {message: 'No se ha encontrado este usuario'});
    }else  {
        // confirmar la contraseña
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        }else  {
            return done(null, false, {message: 'Contraseña incorrecta'});
        }
    }
}));

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id, (err, user) => {
        done(err, user);
    })
});