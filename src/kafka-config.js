const { Kafka } = require('kafkajs')

const kafkaurl=process.env.KAFKA_BROKERS
console.log(kafkaurl)
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [kafkaurl]
  })

  module.exports=kafka;