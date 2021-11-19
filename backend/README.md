# Passo a passo para executar o backend

- 1° passo:
    - Se tiver com o docker instalado, execute o comando `docker-compose up -d` dentro da pasta */backend*.
    - Após rodar o comando, verificar se os containers estão sendo executados com o comando: `docker ps -a`. Deverá ser listado 2 containers com o nome *database_insights* e *backend_insight*.

- 2° passo:
    - Com o container da aplicação rodando, agora bastante executar as migrations para criar as tabelas no banco, executando o comando: `yarn typeorm migration:run` ou `npm run typeorm migration:run`

## Documentação API

Para acessar a documentação, basta acessar a url: `http://localhost:3333/api-docs/`
