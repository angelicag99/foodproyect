const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const app = express();

// Passport config
require('./config/passport')(passport);

//DB config
const db = require('./config/keys').MongoURI

// Connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('Mongodb Connected...'))
.catch(err => console.log(err));


// EJS

app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

//Express Session
app.use(session({
   secret: 'secret',
   resave: true,
   saveUninitialized: true
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error = req.flash('error');
   next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 2000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));