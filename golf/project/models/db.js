const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ang123:ang123@list-zsrnz.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');