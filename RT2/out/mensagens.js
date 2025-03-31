"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mensagens = /** @class */ (function () {
    function Mensagens() {
        this.boasVindas = function () {
            console.log("\nBem-vindo \u00E0 Calculadora Polim\u00F3rfica!\n");
        };
        this.listarOpcoes = function () {
            console.log("Aqui voc\u00EA pode:");
            console.log("Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar e Calcular Ra\u00EDzes de Bhaskara!\n");
            console.log("Para encerrar, digite \"Sair\"\n");
        };
    }
    return Mensagens;
}());
exports.default = Mensagens;
