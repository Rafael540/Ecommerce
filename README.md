# 🛍️ E-commerce em React (Sem Carrinho)

## 📌 Visão Geral

Esta é uma aplicação de e-commerce desenvolvida em **React** com foco na exibição de produtos. O sistema permite:

- Listar produtos de uma API externa
- Visualizar detalhes individuais de cada produto
- Utilizar navegação entre páginas com React Router

---

## 🚀 Tecnologias Utilizadas

- **React**
- **React Router DOM** – para rotas e navegação
- **CSS Modules** – para estilização dos componentes
- **FakeStore API** – simulação de dados reais de e-commerce

---

## ⚙️ Funcionalidades

### ✅ Listagem de Produtos (`ListProducts`)
- Usa `fetch` ou `axios` para buscar os produtos em `https://fakestoreapi.com/products`
- Exibe:
  - Imagem do produto
  - Título
  - Botão “Mais informações” que leva para a página de detalhes

### ✅ Página de Detalhes (`ProducstId`)
- Captura o `id` do produto via `useParams`
- Faz requisição para `https://fakestoreapi.com/products/:id`
- Mostra:
  - Imagem
  - Título
  - Preço
  - Descrição
  - Categoria

---

## 🔁 Fluxo de Navegação

1. Usuário acessa a página inicial (`/`) e visualiza a lista de produtos.
2. Ao clicar em “Mais informações”, é redirecionado para `/productsId/:id`.
3. Nessa página, os detalhes completos do produto são exibidos.

---

## 🎨 Estilização

- Estilização feita com **CSS Modules** (`App.module.css`, `listProducts.module.css`, etc.)
- Layout responsivo utilizando **Flexbox**
- Cores e tipografia simples e agradáveis

---

## 📡 API Utilizada

Todos os dados são obtidos da [FakeStore API](https://fakestoreapi.com):

- **Listar todos os produtos:** `GET /products`
- **Buscar um produto por ID:** `GET /products/:id`

---

## ▶️ Como iniciar a aplicação

Após instalar as dependências com:

```bash
npm install
npm run dev


