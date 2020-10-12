const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['colocarobrokerkafka']
})

const producer = kafka.producer()

async function produzir(){

    await producer.connect()
    await producer.send({
      topic: 'novo',
      messages: [
        { value: 'Hello KafkaJS user!, ajsdjadj, {a' },
        { value: 'Hello KafkaJS user!, da' },
      ],
    })
    
    await producer.disconnect()
}

async function ler(topico){
const consumer = kafka.consumer({ groupId: 'test-group' })

await consumer.connect()
await consumer.subscribe({ topic: topico, fromBeginning: true })

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    })
  },
})
}

produzir();
