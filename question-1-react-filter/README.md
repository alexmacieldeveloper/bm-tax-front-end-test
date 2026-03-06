# React Item Filter

## Sobre o projeto

Este projeto é uma aplicação simples desenvolvida em **React com TypeScript** que demonstra uma funcionalidade de **filtro dinâmico de itens**.

A interface exibe uma lista de itens e permite que o usuário pesquise por um item específico utilizando um campo de busca. Conforme o usuário digita, a lista é filtrada automaticamente em tempo real.

O objetivo desta implementação é demonstrar conceitos fundamentais do React, como:

- Estrutura de componentes
- Gerenciamento de estado com React Hooks **(useState e useEffect)**
- Inputs controlados
- Renderização de listas
- Organização de projeto
- Boas práticas básicas de acessibilidade

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS

## Detalhes da implementação

A lógica de filtragem foi implementada utilizando **React Hooks**.

- **useState** foi utilizado para armazenar o valor digitado pelo usuário no campo de busca.
- **useEffect** pode ser utilizado para reagir a mudanças no estado quando necessário.
- A lista de itens é filtrada dinamicamente com base no valor da busca.
- O input foi implementado como um **componente controlado**, ou seja, seu valor é controlado pelo estado do React.

O projeto também foi organizado em pastas para separar responsabilidades:

```
src/
  components/
  data/
  types/
```

- **components**: componentes reutilizáveis da interface  
- **data**: dados mock utilizados na aplicação  
- **types**: definições de tipos utilizando TypeScript  

## Como executar o projeto

**1. Clonar o repositório**

```bash
git clone https://github.com/alexmacieldeveloper/bm-tax-front-end-test/
```

**2. Acessar a pasta do projeto**

```bash
cd question-1-react-filter
```

**3. Instalar as dependências**

```bash
npm install
```

**4. Executar o projeto**

```bash
npm run dev
```

**O projeto estará disponível em:**

http://localhost:5173/

## Versões utilizadas

Durante o desenvolvimento foram utilizadas as seguintes versões:

**Node.js 20.19.4**

**npm 10.8.2**

**React 19.2.0**

**Vite 7.3.1**

