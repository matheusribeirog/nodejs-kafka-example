<h1>Kafka Example</h1>

<p align="center"> Aplicação para facilitar os Devops a testarem Kafka com uma aplicação Real, produzindo e consumindo mensagens do kafka.</p>

<h1>Pré-requisitos</h1>

Antes de começar, você vai precisar ter um cluster kafka / zookeeper para a app se comunicar:
[Kafka](https://kafka.apache.org/).

<h1>Variáveis de ambiente</h1> <br>
```
KAFKA_BROKERS= exemplo(kafka:9092,kafka2:9092)
```

<h1>Rodando a App localmente </h1>

```bash
# Clone do repositório
$ git clone <https://github.com/matheusribeirog/nodejs-kafka-example>

# Acesse o diretório do projeto
$ cd kafka-example

# Instale as dependências
$ npm install 

# Executando a app
$ node ./src/server.js

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```

<br>

<h1>Requests da API </h1>

**_Recomendada a Utilização de um serviço de request exemplo, postman,insominia_**

<br>

<strong>Produzir Mensagem em um tópico</strong>

```
[POST] http://localhost:8080/kafka-example/mensagem/produzir
```

**_Body Json_**

```
{
"topico":"nomeDoTopico",
"mensagem":"Mensagem do Tópico"
}
```

<br>

<strong>Habilitar Consumidor do tópico</strong>

```
[GET] http://localhost:8080/kafka-example/mensagem/consumir/NomeDoTópico
```

**_Substituir NomeDoTopico pelo tópico desejado_**

<br>

<strong>Consumir mensagens armazenadas no array após o consumo</strong>

```
[GET] http://localhost:8080/kafka-example/mensagem/todas
```