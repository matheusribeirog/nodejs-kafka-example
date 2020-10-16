const express = require("express");
const app=express();

app.use(express.json());

const PORT = process.env.port || 8080;

const produtor=require("./produtor")
const consumidor=require("./subscriber")



app.get('/kafka-example/',(req,res)=>{
    res.json({status:"Sucesso", hora:Date.now()})
})

app.post('/kafka-example/mensagem/produzir',(req,res)=>{
    let {mensagem,topico} = req.body;
    res.send("ola mundo"+mensagem);
    produtor.produzir(mensagem,topico);
})

app.get('/kafka-example/mensagem/consumir/:topico',(req,res)=>{
    let topico = req.params.topico;
    consumidor.consumir(topico);
    res.status(200).json({status:"Consumindo mensagens"})
})

app.get('/kafka-example/mensagem/todas',(req,res)=>{
    return res.send(consumidor.mensagens())
})

app.get('/kafka-example/health',(req,res)=>{
    res.status(200).json({status:"Aplicação Health 😀🎉"})
})

app.listen(8080,()=>{
    console.log("Servidor executando na porta "+PORT)
})

