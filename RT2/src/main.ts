import * as readline from 'readline';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';
import Mensagens from './mensagens';

let mensagens = new Mensagens()

let iniciar = () => {
    let leitor = readline.createInterface({ //Permite que o programa leia e escreva no terminal.
        input: process.stdin,
        output: process.stdout
    });

    leitor.question(`Qual Operação Deseja?\n`, (operacao) => {
        if (operacao === 'Bhaskara') {
            leitor.question(`Informe os Coeficientes a, b e c: `, (valor) => {
                let [numero1, numero2, numero3] = valor.split(' ').map(Number)
                let [x1, x2] = Bhaskara.calcularBhaskara(numero1, numero2, numero3)
                console.log(`Raízes da Equação: x1: ${x1} e x2: ${x2}.`)
            })
        } else if (operacao === 'Sair') {
            console.log(`Até a próxima!`)
            leitor.close()
        } else {
            leitor.question(`Informe os Números: `, (valor) => {
                let [numero1, numero2] = valor.split(' ').map(Number)
                switch (operacao) {
                    case 'Somar':
                        let calculo = new Soma()
                        console.log(`O Resultado da Operação é: ${calculo.calcular(numero1, numero2)}\n`)
                        break;
                    case 'Subtrair':
                        calculo = new Subtracao()
                        console.log(`O Resultado da Operação é: ${calculo.calcular(numero1, numero2)}\n`)
                        break;
                    case 'Multiplicar':
                        calculo = new Multiplicacao()
                        console.log(`O Resultado da Operação é: ${calculo.calcular(numero1, numero2)}\n`)
                        break;
                    case 'Dividir':
                        calculo = new Divisao()
                        console.log(`O Resultado da Operação é: ${calculo.calcular(numero1, numero2)}\n`)
                        break;
                    case 'Potenciação':
                        calculo = new Potenciacao()
                        console.log(`O Resultado da Operação é: ${calculo.calcular(numero1, numero2)}\n`)
                        break;
                    case 'Radiciação':
                        calculo = new Radiciacao()
                        console.log(`O Resultado da Operação é: ${calculo.calcular(numero1, numero2)}\n`)
                        break;
                    case 'Sair':
                        console.log(`Até a próxima!`)
                        leitor.close()
                        break;
                    default:
                        console.log(`Operação Inválida!`)
                }
            })
        }
    });
}
mensagens.boasVindas()
mensagens.listarOpcoes()
iniciar()