<div align="center">

# 🥟 Pastelaria & Cia — Cardápio Digital

### Cardápio online responsivo com carrinho e pedidos pelo WhatsApp

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**[🌐 VER DEMONSTRAÇÃO](https://sule-sampaio.github.io/pastelaria-cia-demo/)**

</div>

---

## 📖 Sobre o projeto

Este projeto é uma demonstração de **cardápio digital para a Pastelaria & Cia**, desenvolvido para facilitar o processo de pedidos pelo celular.

A proposta surgiu a partir de um problema real: o estabelecimento utilizava um serviço externo de cardápio digital que deixou de funcionar corretamente.

A solução desenvolvida permite que o cliente navegue pelo cardápio, escolha produtos, personalize o pedido, selecione entrega ou retirada e envie o pedido completo diretamente para o WhatsApp do estabelecimento.

> ⚠️ Este é um projeto demonstrativo e não representa atualmente o site oficial da Pastelaria & Cia.

---

## 📸 Preview

### 🖥️ Desktop

> Adicione aqui uma captura de tela da versão desktop.

### 📱 Mobile

> Adicione aqui uma captura de tela da versão mobile.

---

## ✨ Funcionalidades

- 🍔 Cardápio dividido por categorias
- 🔎 Busca de produtos
- 📏 Seleção de tamanhos M/G
- 🛒 Carrinho de compras
- ➕ Controle de quantidade
- 🧀 Personalização com adicionais
- 💰 Adicionais gratuitos e pagos
- 📝 Observações personalizadas por produto
- 🧮 Cálculo automático do pedido
- 🚚 Opção de entrega
- 💵 Taxa de entrega fixa de **R$ 8,00**
- 🏪 Opção de retirada no estabelecimento
- 💳 Pagamento via Pix
- 💳 Cartão de crédito
- 💳 Cartão de débito
- 💵 Pagamento em dinheiro
- 💰 Campo para informar troco
- 📍 Informações de localização
- 📲 Finalização diretamente pelo WhatsApp
- 💾 Carrinho armazenado com LocalStorage
- 📱 Layout responsivo

---

## 🛒 Fluxo do pedido

```text
Cliente acessa o cardápio
          ↓
    Escolhe o produto
          ↓
Seleciona tamanho/adicionais
          ↓
   Adiciona ao carrinho
          ↓
     Revisa o pedido
          ↓
  Entrega ou retirada
          ↓
  Forma de pagamento
          ↓
 Sistema calcula o total
          ↓
   Finaliza no WhatsApp
```

O objetivo é diminuir a quantidade de mensagens necessárias para montar um pedido.

Em vez de:

**Cliente → pergunta cardápio → pergunta preço → escolhe → informa endereço → pagamento**

a experiência passa a ser:

**Cliente → monta pedido → WhatsApp**

---

## 🚚 Entrega e retirada

O cliente pode escolher entre:

### 🚚 Entrega

Taxa fixa:

**R$ 8,00**

O valor é adicionado automaticamente ao total do pedido.

### 🏪 Retirada

O cliente também pode retirar o pedido diretamente no estabelecimento, sem cobrança da taxa de entrega.

---

## 💳 Formas de pagamento

O sistema permite selecionar:

| Forma de pagamento | Disponível |
|---|:---:|
| Pix | ✅ |
| Cartão de crédito | ✅ |
| Cartão de débito | ✅ |
| Dinheiro | ✅ |

Quando o cliente seleciona **Dinheiro**, também pode informar se precisa de troco.

---

## 📲 Integração com WhatsApp

Ao finalizar o pedido, o sistema gera automaticamente uma mensagem organizada contendo:

- Produtos
- Quantidades
- Tamanhos
- Adicionais
- Observações
- Tipo de entrega
- Endereço
- Forma de pagamento
- Subtotal
- Taxa de entrega
- Total do pedido

Depois disso, o cliente é direcionado para o WhatsApp da Pastelaria & Cia.

---

## 🛠️ Tecnologias

O projeto foi desenvolvido utilizando:

### HTML5
Estrutura e organização do cardápio.

### CSS3
Layout, responsividade, componentes e identidade visual.

### JavaScript
Responsável pela lógica do cardápio, carrinho, adicionais, checkout e geração do pedido.

### LocalStorage
Utilizado para manter informações do carrinho armazenadas no navegador.

### WhatsApp
Integração para envio do pedido diretamente ao estabelecimento.

---

## 📱 Responsividade

O projeto foi desenvolvido pensando principalmente na experiência pelo celular, já que grande parte dos clientes chega ao cardápio através de redes sociais e WhatsApp.

Também funciona em:

- 📱 Smartphones
- 📱 Tablets
- 💻 Notebooks
- 🖥️ Desktops

---

## 🎯 Problema → Solução

| Problema | Solução |
|---|---|
| Cardápio antigo indisponível | Cardápio próprio |
| Pedido montado manualmente | Carrinho digital |
| Cliente precisa perguntar preços | Valores disponíveis no cardápio |
| Adicionais informados por mensagem | Personalização no próprio site |
| Cálculo manual | Total automático |
| Informações espalhadas | Checkout organizado |
| Pedido digitado manualmente | Mensagem automática para WhatsApp |

---

## 📍 Pastelaria & Cia

**Pastelaria & Cia — Acarajé**

📍 Rua Durval Campos, São Jorge, nº 528  
Jaguaquara — BA

📱 **(73) 98855-2247**

📷 Instagram: **@pastelariaeciaofc**

---

## ⚠️ Aviso

Este projeto foi desenvolvido como uma **demonstração de solução digital**.

As marcas, logotipos, nomes e imagens da Pastelaria & Cia utilizados nesta demonstração pertencem aos seus respectivos proprietários.

O projeto não representa atualmente um site oficial do estabelecimento.

---

## 👨‍💻 Desenvolvedor

### Sule Sampaio

Projeto desenvolvido para demonstrar conhecimentos em desenvolvimento Front-end e criação de soluções digitais para pequenos negócios.

### Principais conceitos aplicados

`HTML` • `CSS` • `JavaScript` • `DOM` • `LocalStorage` • `Responsividade` • `Carrinho de compras` • `Checkout` • `Integração com WhatsApp`

---

<div align="center">

### ⭐ Gostou do projeto?

Deixe uma estrela no repositório. ⭐

**[🌐 Acessar demonstração](https://sule-sampaio.github.io/pastelaria-cia-demo/)**

</div>
