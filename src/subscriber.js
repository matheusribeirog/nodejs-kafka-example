const { consumer } = require("./kafka-config")
const kafka=require("./kafka-config")

let mensagens=[]
module.exports={
    async consumir(topic){
        const consumer = kafka.consumer({ groupId: 'test-group' })
    
        await consumer.connect()
        await consumer.subscribe({ topic: topic, fromBeginning: true })
    
        await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                vetor: mensagens.push(message.value.toString()),
                value: message.value.toString(),
            })
        },
    });
    
    },
    mensagens(){
        return(mensagens)
    }
}