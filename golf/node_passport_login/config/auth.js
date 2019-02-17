module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }

        req.flash('error_msg', 'Por favor ingresa para ver esta pagina');
        res.redirect('/users/login');
    }
}