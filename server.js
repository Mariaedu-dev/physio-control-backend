const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const cors = require('cors');

const app = express();


// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rotas
const consultaRoutes = require('./routes/consultaRoutes');
app.use('/api/consultas', consultaRoutes);

// Conexão Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("❌ Erro de conexão:", err));

const PORT = process.env.PORT || 2005;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));