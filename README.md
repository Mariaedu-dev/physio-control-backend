# ⚙️ FisioApp - Backend API

API RESTful desenvolvida em Node.js para gerenciamento de procedimentos de fisioterapia.  
Projeto criado como parte do desafio da disciplina de Coding: Mobile.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose (ORM)
- Nodemon

---

## 📂 Estrutura do Projeto
```
physio-control-backend/
│
├── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
```

---

## 📊 Entidade Principal

### Consulta de Fisioterapia

Entidade responsável por registrar os atendimentos realizados.

#### Campos:

- `pacienteTutor` → Nome do paciente ou responsável
- `procedimento` → Tipo de procedimento:
  - Acupuntura
  - Hidroterapia
  - Laserterapia
  - Cinesioterapia
- `dataSessao` → Data da sessão
- `evolucaoConduta` → Evolução/observações clínicas
- `createdAt / updatedAt` → Gerados automaticamente

## 🔁 Operações CRUD

- POST → Criar consulta
- GET → Listar consultas
- PUT → Atualizar consulta
- DELETE → Remover consulta

---

## 📡 Endpoints


GET /consulta
POST /consulta
PUT /consulta/:id
DELETE /consulta/:id

---

## 🌐 Deploy

🚀 API disponível em:  
https://SEU-BACKEND.onrender.com

---

## 🔗 Integração com Frontend

O frontend da aplicação está hospedado no Netlify:

https://SEU-FRONTEND.netlify.app

---

## 📌 Diferenciais do Projeto
- Arquitetura MVC
- API RESTful completa
- Persistência com MongoDB
- Deploy em produção (Render)

---

## 🧠 Aprendizados
- Criação de APIs
- Integração com banco NoSQL
- Organização backend
- Deploy fullstack

---

## 👩‍💻 Autora

Maria Eduarda

Estudante de Fisioterapia e Análise e Desenvolvimento de Sistemas
