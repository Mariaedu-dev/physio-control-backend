const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
  pacienteTutor: { type: String, required: true },
  procedimento: { 
    type: String, 
    required: true,
    enum: ['Acupuntura', 'Hidroterapia', 'Laserterapia', 'Cinesioterapia'] 
  },
  dataSessao: { type: Date, required: true },
  evolucaoConduta: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Consulta', consultaSchema);