# Avaliação da Pull Request

Ao fazer a análise do código da PR, podemos identificar alguns trechos que podem causar problemas no funcionamento do componente e que não seguem boas práticas do React. 

**1. Mutação direta no estado**

Em: 

```bash
this.state.newUserName = event.target.value;
```

O estado não pode ser alterado diretamente, o correto seria utilizar o **setState** para garantir que o React controle a atualização. Sugestão para correção:

```bash
this.setState({ newUserName: event.target.value });
```

**2. Manipulação do array**

No método **addUser**, é utilizado o **push** ```this.state.users.push(newUser);``` diretamente no array o que também representa uma mutação direta do estado. O correto seria criar um array novo. Sugestão para correção:

```bash
this.setState({
  users: [...this.state.users, newUser]
});
```

**3. Método forceUpdate**

O método **forceUpdate()** está sendo utilizado para atualizar o componente ```this.forceUpdate();```, mas esse método normalmente não deve ser utilizado, pois a interface já é automaticamente atualizada quando o **setState** é chamado. Então, o correto seria remover o método **forceUpdate()**.

**4. Input sem o onChange**

```bash
<input
  type="text"
  placeholder="Nome do usuário"
  value={this.state.newUserName}
/>
```

O input está sem o onChange que dessa forma impede que o valor seja atualizado quando o usuário digita. Correção:

```bash
<input
  type="text"
  placeholder="Nome do usuário"
  value={this.state.newUserName}
  onChange={(e) => this.handleNameChange(e)}
/>
```

**5. A falta da key no map**

No trecho:
```bash
{this.state.users.map(user => (
  <li>
```

Cada elemento que seja renderizado em listas deve possuir uma **key** para que o mesmo seja identificado corretamente durante a renderização. Sugestão de correção:

```bash
{this.state.users.map(user => (
  <li key={user.id}>
```
