const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    Titulo: {
        type: String,
        required: 'Este campo es requerido.'
    },
    Descripcion: {
        type: String
    },
    Observaciones: {
        type: String
    }
});

mongoose.model('Employee', employeeSchema);