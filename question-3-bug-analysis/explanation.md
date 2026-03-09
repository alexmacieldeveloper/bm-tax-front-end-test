# Identificação e correção do erro

Erro:

```bash
TypeError: Cannot read properties of null (reading 'map')
at ProductDisplay (http://localhost:3000/static/js/main.chunk.js:XXX:YY)
at renderWithHooks (http://localhost:3000/static/js/vendors~main.chunk.js:AAA:BB)
at mountComponent (http://localhost:3000/static/js/vendors~main.chunk.js:BBB:CC)
... (outras linhas do stack trace)
```

O erro acima geralmente acontece quando tentamos utilizar o método **map** em uma variável que possui o valor **null**. No React, esse erro é comum quando tentamos percorrer uma lista de dados que ainda não foi carregada ou não foi iniciada corretamente. Uma possível causa do problema seria que a variável fosse inicializada dessa forma:

```bash
const [products, setProducts] = useState(null);
```
Verifique que dentro do **useState** o valor setado está como **null**, o que impede do método map ser utilizado, pois o mesmo só pode ser usado em arrays. 

## Sugestão de correção

A forma mais simples de corrigir esse erro seria iniciar o estado como um array vazio:

```bash
const [products, setProducts] = useState([]);
```

Mas uma outra alternativa seria verificar se a variável possui um valor antes do **.map()** ser executado, utilizando uma condicional. Exemplo:
```bash
{products && products.map(product => (
  <ProductCard key={product.id} product={product} />
))}
```