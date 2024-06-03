# Rent Project - Rent Services
Repositório com arquivos dockers entre outros para iniciar o ambiente do projeto.

>[!IMPORTANTE]
>Caso você ainda não tenha visitado a página inicial deste projeto, recomendo começar por ela, pois há informações importantes sobre o projeto e configurações de ambiente.
>[Pagina inicial](https://github.com/cteotonio-rent)

## Quais conteiners serão iniciados
1) LocalStack - Ambiente para simulação de provedor de Cloud, para este projeto AWS
2) Terraform - conteiner temporário, apenas para criação dos recursos S3 e SQS no LocalStack
3) MongoDB Server - conteiner com o ambiente do MongoDB
4) EnvoyGateway - container do proxy para roteamento das chamadas da API
5) RentService - Conteiner do projeto Serviço de Locação
6) ConsumidorOrder - Container de app para consumo e registro de notificações de novos pedidos
7) Loki - Container Indexador de logs
8) Promtail - Container do agente para coleta de logs para Loki
9) Grafana - Container para visualização dos logs

| Container | Links | Observação |
|-------------|-------------|-------------|
| Localstack| localhots:4456 | precisa de autenticação no endereço https://app.localstack.cloud/ |
