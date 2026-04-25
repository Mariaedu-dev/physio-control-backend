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
```bash
physio-control-backend/
│
├── models
  └── Consulta
├── controllers
│ └── ConsultaController
├── routes
│ └── consultaRoutes
├── server.js
├── package.json
├── .gitignore
├── README.md

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
```md
(https://physio-control-backend.onrender.com/api/consultas)
```
---

## 🔗 Integração com Frontend

O frontend da aplicação está hospedado no Netlify:
```md
(https://physio-front.netlify.app/)
```
---

## 📌 Sobre o Projeto

Projeto desenvolvido com foco em:

Desenvolvimento mobile com PWA
Integração fullstack
Consumo de API REST
Persistência de dados com MongoDB
Deploy em produção (Netlify + Render)

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

## Consideraçoes
> 🔗 Projeto Fullstack com frontend em PWA e backend em Node.js, utilizando MongoDB como banco de dados.
