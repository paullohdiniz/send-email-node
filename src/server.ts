import "reflect-metadata";

import express from 'express';

import { router } from './routes'

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server ativo!!!!"));    



/*
app.get("/users", (request,responde)=>{
    return responde.send("GET serviço de usuário!!!");
});

app.post("/users", (request,responde)=>{
    return responde.json({messagem: "POST request de serviço"});
});
*/