import express from 'express';

const app = express();

app.get("/users", (request,responde)=>{
    return responde.send("GET serviço de usuário!!!");
});

app.post("/users", (request,responde)=>{
    return responde.json({messagem: "POST request de serviço"});
});

app.listen(3333, () => console.log("Server ativo!!!!"));    