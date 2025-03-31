"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var soma_1 = __importDefault(require("./soma"));
var subtracao_1 = __importDefault(require("./subtracao"));
var multiplicacao_1 = __importDefault(require("./multiplicacao"));
var divisao_1 = __importDefault(require("./divisao"));
var potenciacao_1 = __importDefault(require("./potenciacao"));
var radiciacao_1 = __importDefault(require("./radiciacao"));
var bhaskara_1 = __importDefault(require("./bhaskara"));
var mensagens_1 = __importDefault(require("./mensagens"));
var mensagens = new mensagens_1.default();
var iniciar = function () {
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Qual Opera\u00E7\u00E3o Deseja?\n", function (operacao) {
        if (operacao === 'Bhaskara') {
            leitor.question("Informe os Coeficientes a, b e c: ", function (valor) {
                var _a = valor.split(' ').map(Number), numero1 = _a[0], numero2 = _a[1], numero3 = _a[2];
                var _b = bhaskara_1.default.calcularBhaskara(numero1, numero2, numero3), x1 = _b[0], x2 = _b[1];
                console.log("Ra\u00EDzes da Equa\u00E7\u00E3o: x1: ".concat(x1, " e x2: ").concat(x2, "."));
            });
        }
        else if (operacao === 'Sair') {
            console.log("At\u00E9 a pr\u00F3xima!");
            leitor.close();
        }
        else {
            leitor.question("Informe os N\u00FAmeros: ", function (valor) {
                var _a = valor.split(' ').map(Number), numero1 = _a[0], numero2 = _a[1];
                switch (operacao) {
                    case 'Somar':
                        var calculo = new soma_1.default();
                        console.log("O Resultado da Opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Subtrair':
                        calculo = new subtracao_1.default();
                        console.log("O Resultado da Opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Multiplicar':
                        calculo = new multiplicacao_1.default();
                        console.log("O Resultado da Opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Dividir':
                        calculo = new divisao_1.default();
                        console.log("O Resultado da Opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Potenciação':
                        calculo = new potenciacao_1.default();
                        console.log("O Resultado da Opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Radiciação':
                        calculo = new radiciacao_1.default();
                        console.log("O Resultado da Opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Sair':
                        console.log("At\u00E9 a pr\u00F3xima!");
                        leitor.close();
                        break;
                    default:
                        console.log("Opera\u00E7\u00E3o Inv\u00E1lida!");
                }
            });
        }
    });
};
mensagens.boasVindas();
mensagens.listarOpcoes();
iniciar();
