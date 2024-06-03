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
| MongoDB | localhost:27017 | não requer autenticação |
| EnvoyGateway | localhost:9902 (Admim) | localhost:10000 é o proxy / localhost:9902/clusters | 
| RentService | localhost:9090 | Para alterar o idioma para mudar o cabeçalho Accept-Language da requisição para (pt-BR ou en-US) |
| Loki | localhost:3100 | Para testar se está ativo pode usar http://localhost:3100/ready |
| Grafana | localhost:3000 | Autenticação anônima, caso necessite Usuário: Admin e Senha: Admin |

### Screen Shot - LocalStack
<img src="https://github.com/cteotonio-rent/documentacao/blob/main/src/localstack.png" />

### Screen Shot - Grafana
<img src="https://github.com/cteotonio-rent/documentacao/blob/main/src/grafana.png" />

## Como rodar o projeto ✅
1. Em seu Terminal navegue até a pasta clonada deste repositório
2. Dentro da pasta src digit o comando abaixo para compilar os projetos e carregar os containers

```
docker-compose up --buld
```

## ⚠️ Problemas enfrentados

### Erro ao subir containers:
Ao digitar o comando **docker-compose up -d** recebo a mensagem de erro: **services.splunk_server must be a mappin**
* Como solucionar: Certifique-se que o Docker esteja em execução e tente novamente.

### Erro ao subir container por falta de memória disponível para o docker
Um dos problemas mais comuns é a memoria que esta imagem requer (2GB)
* Como solucionar: Ajuste as configurações de merória que o docker pode reservar do windows.
1) Encontre o arquivo **.wslconfig** normalmente localizado em **DiretórioRaiz:/Users/SeuUsuario**, no meu caso ficou assim **C:\Users\Cleber**
2) Abra o arquivo em seu editor de texto
3) Adicione ou altera a configuração memory para uma quantidade que seja suficiente para subir os containers
4) Segue abaixo um exemplo de como ficou meu arquivo **.wslconfig**

```
[wsl2]
memory=5GB # How much memory to assign to the WSL2 VM.
processors=5 # How many processors to assign to the WSL2 VM.
```

5) Salve as alterações e reinicie o Docker
