# 🧮 Calculadora POO CLI em TypeScript

Este projeto foi desenvolvido como exercício de fixação dos conceitos de **Programação Orientada a Objetos (POO)** com **TypeScript**, incluindo:
- Encapsulamento;
- Herança;
- Polimorfismo;
- Organização por módulos e classes.

O sistema consiste em uma **calculadora via linha de comando (CLI)**, que oferece ao usuário a possibilidade de realizar cálculos matemáticos básicos, além da fórmula de **Bhaskara**.

<br>

## 📝 Objetivos da Atividade
- Aplicar conceitos de POO com TypeScript.
- Criar uma classe específica para cada operação.
- Utilizar polimorfismo para padronizar o método de cálculo.
- Interagir com o usuário utilizando **readline** do Node.js.
- Realizar operações com dois números, exceto Bhaskara (que usa três).

<br>

## 🗂️ Estrutura do Projeto
📁 src <br>
├── 📄 main.ts - Arquivo principal, entrada CLI. <br>
├── 📄 soma.ts - Classe Soma. <br>
├── 📄 subtracao.ts - Classe Subtração. <br>
├── 📄 multiplicacao.ts - Classe Multiplicação. <br>
├── 📄 divisao.ts - Classe Divisão. <br>
├── 📄 potenciacao.ts - Classe Potenciação. <br>
├── 📄 radiciacao.ts - Classe Radiciação. <br>
├── 📄 bhaskara.ts - Classe Bhaskara. <br>
├── 📄 mensagens.ts - Mensagens auxiliares para CLI.

<br>

## 🔁 Funcionalidades
- Soma
- Subtração
- Multiplicação
- Divisão
- Potenciação
- Radiciação
- Bhaskara (raízes de equação do 2º grau)

<br>

## 📂 Tecnologias Utilizadas
- Node.js
- TypeScript

<br>

## 🛠️ Como Executar
1. Clone o repositório:
```bash
git clone https://github.com/abeatrizdscoelho/TS-POO-Calculadora.git
```

2. Instale o TypeScript globalmente (se necessário):
```bash
npm install -g typescript
```

3. Compile o projeto:
```bash
tsc
```

4. Execute o código gerado:
```bash
node ./out/index.js
```

Verifique se o tsconfig.json está com:
```json
"outDir": "./out"
```
