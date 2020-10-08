const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['ec2-3-83-253-41.compute-1.amazonaws.com:9092']
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

produzir();