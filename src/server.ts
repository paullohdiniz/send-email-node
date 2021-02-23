import express from 'express';

const app = express();

app.get("/users", (request,responde)=>{
    return responde.send("Hello world");
});

app.post("/users", (request,responde)=>{
    return responde.json({messagem: "Hello world"});
});

app.listen(3333, () => console.log("Server ativo!!!!"));    