# BMTax Frontend Challenge

Este repositório contém a solução para o **BMTax Frontend Challenge**, cada pasta se refere a uma das questões descritas no desafio.

O desafio é dividido em quatro partes, cada uma abordando um tipo diferente de problema comum no dia a dia de desenvolvimento.

# Questões

## Questão 1 – Filtro de itens em React

Foi implementada uma funcionalidade de filtro de itens em uma aplicação React.  
A interface possui um campo de busca que permite ao usuário filtrar dinamicamente uma lista de empresas conforme o texto digitado.

### Requisitos atendidos

- Campo de input para busca
- Filtragem dinâmica conforme o usuário digita
- Comparação **case-insensitive**
- Componentização da interface
- Uso de **React Hooks**

## Questão 2 – Code Review

Foi realizada a análise de uma Pull Request contendo um componente de gerenciamento de usuários em React.

Durante a revisão foram identificados alguns problemas no código, como:

- Mutação direta do estado
- Uso incorreto de ```push``` em arrays do estado
- Utilização de ```forceUpdate```
- Input controlado sem ```onChange```
- Falta da propriedade ```key``` em elementos renderizados com ```map```

Também foram sugeridas correções para cada um desses pontos seguindo boas práticas do React.

## Questão 3 – Identificação e correção de erro

Foi analisada uma *stack trace* indicando o erro:

```bash
TypeError: Cannot read properties of null (reading 'map')
```

O problema ocorre quando o método ```map``` é executado em uma variável com valor ```null```.

A solução proposta foi:

- Inicializar o estado como um **array vazio**
- Ou utilizar **renderização condicional** antes de executar o ```map```

## Questão 4 – Autenticação e consumo de API

Foi proposta uma abordagem para autenticação em uma API que utiliza **token OAuth JWT com duração de uma hora**.

A solução considera um cenário de aplicação **Server Side**, onde:

- A autenticação é realizada no **servidor**
- As credenciais (```access_key``` e ```secret_key```) são armazenadas em **variáveis de ambiente**
- O ```access_token``` é utilizado nas requisições para os endpoints protegidos

### Otimizações de performance propostas

- Reutilização do token enquanto estiver válido
- Cache temporário do token no servidor
- Centralização das chamadas da API
- Execução de requisições em paralelo quando necessário