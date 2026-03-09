# Implementação de autenticação e otimização de performance

Para consumir os endpoints da API, o primeiro passo seria obter um token de acesso através do endpoint de autenticação: 

```bash
POST https://api.acme.com/auth
```

Nesse momento devemos enviar as credenciais **access_key** e **secret_key** que serão utilizadas para poder gerar o **access_token** que utilizaremos para acessar os endpoints da API.

Como a aplicação será usada no contexto Server Side, a abordagem ideal seria centralizar a lógica de autenticacão no servidor. Com isso, as credenciais não ficariam expostas no frontend e o controle do token pode ser feito de maneira mais segura. 

Após a requisição de autenticação, a API retorna um **access_token** e também o tempo de expiração do token (**access_token_expires_in**). Esse token dever ser utilizado no header das requisiçöes dos endpoints protegidos:

```bash
Authorization: Bearer {access_token}
```

Para evitar que a informaçöes sensíveis fiquem expostas, o ideal seria que as credenciais **access_key** e **secret_key** sejam armazenadas em variáveis de ambientes no servidor.

## Otimização de performance

Como o formulário irá consumir múltiplos endpoints, algumas estratégias podem ser utilizadas para melhorar a performance.

Uma delas é reutilizar o token enquanto ele estiver válido, evitando chamadas desnecessárias ao endpoint de autenticação sempre que uma nova requisição for feita.

Outra estratégia é manter um cache temporário do token no servidor, armazenando o token gerado junto com o seu tempo de expiração. Dessa forma, o sistema pode reutilizar o token nas requisições seguintes e gerar um novo apenas quando ele estiver próximo de expirar. Também é possível centralizar as chamadas da API em um serviço no backend, evitando repetir a lógica de autenticação em várias partes da aplicação.

Quando o formulário for carregar os dados de diferentes endpoints, essas requisições podem ser feitas em paralelo, reduzindo o tempo total de carregamento da página.

Pensando dessa forma, a aplicação mantém as credenciais seguras, reduz o número de chamadas ao serviço de autenticação e melhora a performance no consumo das APIs necessárias para o funcionamento do formulário de leads.

