const kafka=require("./kafka-config")
module.exports={
    async produzir(mensagem,topico){
        const producer = kafka.producer()
        await producer.connect()
        await producer.send({
          topic: topico,
          messages: [
            { value: mensagem}
          ],
        })
        await producer.disconnect()
    }
}